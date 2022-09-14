import dayjs from 'dayjs';

export function getMonth(
  month: number = dayjs().month(),
  year: number = dayjs().year()
) {
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

export const getMonthModal = () => {
  const year = dayjs().year();
  let month = -1;
  const monthsArr = new Array(3).fill([]).map(() => {
    return new Array(4).fill(null).map(() => {
      month++;
      return [dayjs().month(month).format('MMM'), month];
    });
  });

  return monthsArr;
};
