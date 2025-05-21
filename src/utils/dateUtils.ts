import { format, addDays, differenceInDays, getDay, differenceInWeeks } from 'date-fns';
import { ru } from 'date-fns/locale';
import { DaySchedule, weekdayCurriculum } from '../data/curriculum';

// Function to format date in Russian
export const formatDate = (date: Date): string => {
  return format(date, 'd MMMM yyyy', { locale: ru });
};

// Function to format day of week in Russian
export const formatDayOfWeek = (date: Date): string => {
  return format(date, 'EEEE', { locale: ru });
};

// Function to get curriculum for a specific date based on day of week
export const getCurriculumForDate = (date: Date): DaySchedule => {
  // Get day of week (0 = Monday in our data structure, but 1 = Monday in date-fns)
  // So we need to adjust: 0 = Sunday in date-fns, so we map it to 6 = Sunday in our structure
  const dayOfWeek = getDay(date);
  const adjustedDayOfWeek = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  
  // Determine if it's an odd or even week (week 1 or week 2)
  // We use a reference date (first Monday of our curriculum) to calculate week parity
  const referenceDate = new Date(2025, 9, 4); // October 4, 2025 (first day of our program)
  const weekNumber = Math.abs(differenceInWeeks(date, referenceDate)) % 2;
  const weekKey = weekNumber === 0 ? 'week1' : 'week2';
  
  // Get the curriculum for this day of week and week number
  return weekdayCurriculum[adjustedDayOfWeek][weekKey];
};

// Function to get curriculum for a date range
export const getCurriculumForDateRange = (startDate: Date, endDate: Date): { date: Date; curriculum: DaySchedule }[] => {
  const result: { date: Date; curriculum: DaySchedule }[] = [];
  
  let currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    result.push({
      date: new Date(currentDate),
      curriculum: getCurriculumForDate(currentDate)
    });
    currentDate = addDays(currentDate, 1);
  }
  
  return result;
}; 