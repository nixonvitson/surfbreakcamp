'use client';

import React, { useState } from 'react';
import { setDefaultOptions, differenceInDays } from 'date-fns';
import { ru } from 'date-fns/locale';
import { getCurriculumForDateRange, formatDate, formatDayOfWeek } from '../utils/dateUtils';
import dynamic from 'next/dynamic';

// Set Russian locale as default
setDefaultOptions({ locale: ru });

// Dynamic import for DateRangePicker to avoid SSR issues
const DateRangePicker = dynamic(() => import('../components/DateRangePicker'), {
  ssr: false,
});

// Min and max allowed dates
const MIN_DATE = new Date(2025, 9, 4); // October 4, 2025
const MAX_DATE = new Date(2026, 4, 9); // May 9, 2026

// Min and max range duration in days
const MIN_RANGE_DAYS = 7;
const MAX_RANGE_DAYS = 28;

export default function Home() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [curriculumData, setCurriculumData] = useState<any[]>([]);

  // Handle date changes
  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setErrorMessage('');

    // Validate range when end date is selected
    if (start && end) {
      const daysInRange = Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;

      if (daysInRange < MIN_RANGE_DAYS) {
        setErrorMessage(`Минимальная продолжительность: ${MIN_RANGE_DAYS} дней`);
        return;
      }

      if (daysInRange > MAX_RANGE_DAYS) {
        setErrorMessage(`Максимальная продолжительность: ${MAX_RANGE_DAYS} дней`);
        return;
      }

      // Generate curriculum data
      const curriculumDataResult = getCurriculumForDateRange(start, end);
      setCurriculumData(curriculumDataResult);
    } else {
      setCurriculumData([]);
    }
  };

  return (
    <main className="min-h-screen p-6 md:p-10 max-w-5xl mx-auto">
      <header className="mb-12 flex flex-col items-center">
        <p className="text-slate-600 max-w-xl text-center">
          Выберите даты вашего пребывания для просмотра программы серфкемпа
        </p>
      </header>

      <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-12 border border-slate-100 data-picker__choose-wrapper">
        <h2 className="text-xl font-semibold mb-6 text-slate-900">Выбор дат</h2>
        
        <div className="w-full mb-8">
          <DateRangePicker
            startDate={startDate}
            endDate={endDate}
            onChange={handleDateChange}
            minDate={MIN_DATE}
            maxDate={MAX_DATE}
          />
        </div>

        <div className='data-picker__description'>
          <p className="text-sm text-slate-500">
            Выберите даты в интервале от 7 до 28 дней в период с 4 октября 2025 по 9 мая 2026.
          </p>
          <p className="text-sm text-slate-500">
            Программа организована по дням недели и повторяется каждые 10 недели.
          </p>
        </div>

        {errorMessage && (
          <div className="mt-4 p-3 bg-red-50 text-red-700 border border-red-100 rounded-lg text-sm">
            {errorMessage}
          </div>
        )}

        {startDate && endDate && !errorMessage && (
          <>
            <hr/>
            <p
              className="mt-4 p-3 bg-blue-50 text-blue-700 border border-blue-100 rounded-lg text-sm data-picker__target-date">
              Выбран период: с <strong style={{textDecoration: 'underline'}}>{formatDate(startDate)}</strong> по <strong
              style={{textDecoration: 'underline'}}>{formatDate(endDate)}</strong>
            </p>
            <hr/>
          </>
        )}
      </div>

      {curriculumData.length > 0 && startDate && (
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-slate-100 data-picker__result">
          <h2 className="text-2xl font-semibold mb-8 text-slate-900">Ваша программа</h2>

          <div className="space-y-8 relative">
            <div className="timeline-line"></div>
            
            {curriculumData.map((item, index) => {
              // Calculate day number based on difference from start date
              const dayNumber = differenceInDays(item.date, startDate) + 1;
              
              return (
                <div key={index} className="relative pl-10">
                  <div className="timeline-dot"></div>
                  
                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 data-picker__day">
                    <p className='day'>День {dayNumber}</p>
                    <p className='date'><span className='day-of-week'>{formatDayOfWeek(item.date)}</span> {formatDate(item.date)}</p>

                    <div className="data-picker__actions">
                      <h4 className="text-slate-700 mb-4">{item.curriculum.description}</h4>

                      <div className="flex items-start action">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <p className="font-medium text-slate-700 block time-of-day"><strong>Утро</strong>: {item.curriculum.schedule.morning}</p>
                      </div>
                      <div className="flex items-start action">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-600 mr-3 shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5"></circle>
                            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"></path>
                          </svg>
                        </span>
                        <div>
                          <span className="font-medium text-slate-700 block time-of-day"><strong>День</strong>: </span>
                          <span className="text-slate-600">{item.curriculum.schedule.afternoon}</span>
                        </div>
                      </div>
                      <div className="flex items-start action">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 mr-3 shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M17 12a5 5 0 0 0-5-5m-5 5a5 5 0 0 0 5 5m0-10v10"></path>
                              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"></path>
                            </svg>
                          </span>
                          <div>
                            <span className="font-medium text-slate-700 block time-of-day"><strong>Вечер</strong>: </span>
                            <span className="text-slate-600">{item.curriculum.schedule.evening}</span>
                          </div>
                        </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </main>
  );
} 
