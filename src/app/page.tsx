'use client';

import React, { useState, useEffect } from 'react';
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

const sendHeight = () => {
  const height = document.body.scrollHeight;
  window.parent.postMessage(
    { type: 'iframeHeight', height },
    'https://surfbreak.ru'
  );
};

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

  useEffect(() => {
    if (startDate && endDate) {
      console.log('change endDate')
      sendHeight()
    }
  }, [endDate]);

  return (
    <main className="min-h-screen p-6 md:p-10 max-w-5xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-12 border border-slate-100">
        <header>
          <p>Выберите даты вашего пребывания для просмотра программы серфкемпа</p>
        </header>

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
          <>
            <hr/>
            <div
              className="mt-4 p-3 bg-red-50 text-red-700 border border-red-100 rounded-lg text-sm data-picker__error-message">
              {errorMessage}
            </div>
            <hr/>
          </>
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

      {!errorMessage && curriculumData.length > 0 && startDate && (
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-slate-100 data-picker__result">
          <h2 className="text-2xl font-semibold mb-8 text-slate-900">Ваша программа</h2>

          <div className="space-y-8 relative">
            <div className="timeline-line"></div>
            
            {curriculumData.map((item, index) => {
              // Calculate day number based on difference from start date
              const dayNumber = differenceInDays(item.date, startDate) + 1;
              
              return (
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 data-picker__day">
                  <h4 className='data-picker__day-number'>День {dayNumber}</h4>
                  <div className='data-picker__day-description'>
                    <p className='day'>День {dayNumber}</p>
                    <p className='date'><span className='day-of-week'>{formatDayOfWeek(item.date)}</span> {formatDate(item.date)}</p>

                    <div className="data-picker__actions">
                      <div className="flex items-start action">
                        <p className="font-medium text-slate-700 block time-of-day"><strong>Утро</strong>: {item.curriculum.schedule.morning}</p>
                      </div>
                      <div className="flex items-start action">
                        <div>
                          <span className="font-medium text-slate-700 block time-of-day"><strong>День</strong>: </span>
                          <span className="text-slate-600">{item.curriculum.schedule.afternoon}</span>
                        </div>
                      </div>
                      <div className="flex items-start action">
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
