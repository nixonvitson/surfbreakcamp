'use client';

import React from 'react';
import DatePicker from 'react-datepicker';
import { ru } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import { formatDate } from '../utils/dateUtils';

interface DateRangePickerProps {
  startDate: Date | null;
  endDate: Date | null;
  onChange: (dates: [Date | null, Date | null]) => void;
  minDate: Date;
  maxDate: Date;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  startDate,
  endDate,
  onChange,
  minDate,
  maxDate,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full date-picker">
      <div className="relative date-picker__container">
        <label htmlFor="start-date" className="block text-sm font-medium mb-2 text-slate-700">
          Первый день
        </label>
        <DatePicker
          id="start-date"
          selected={startDate}
          onChange={(date) => onChange([date, endDate])}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          minDate={minDate}
          maxDate={maxDate}
          locale={ru}
          dateFormat="dd.MM.yyyy"
          placeholderText="Выберите дату заезда"
          className="block w-full px-4 py-3 text-slate-900 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all shadow-sm"
          calendarClassName="surfbreak-calendar"
          wrapperClassName="w-full"
          popperClassName="surfbreak-popper"
          popperPlacement="bottom-start"
        />
      </div>
      <div className="relative date-picker__container">
        <label htmlFor="end-date" className="block text-sm font-medium mb-2 text-slate-700">
          Последний день (день до отъезда)
        </label>
        <DatePicker
          id="end-date"
          selected={endDate}
          onChange={(date) => onChange([startDate, date])}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate || minDate}
          maxDate={maxDate}
          locale={ru}
          dateFormat="dd.MM.yyyy"
          placeholderText="Выберите дату отъезда"
          className="block w-full px-4 py-3 text-slate-900 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all shadow-sm"
          calendarClassName="surfbreak-calendar"
          wrapperClassName="w-full"
          popperClassName="surfbreak-popper"
          popperPlacement="bottom-start"
          disabled={!startDate}
        />
      </div>
    </div>
  );
};

export default DateRangePicker; 
