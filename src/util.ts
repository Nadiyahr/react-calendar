import dayjs from 'dayjs';

export function getMonth(month: number = dayjs().month()) {
  const year = dayjs().year();
  const firstDayOfMonth = dayjs(new Date(year, month, 7)).day();
  let currentMonthCount = 0 - firstDayOfMonth;
  const daysArray = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });

  return daysArray;
}
