import { FC, useCallback, useContext, useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { GlobalContext } from '../context/GlobalContext';
import { log } from 'console';

interface Props {
  day: Dayjs;
}

const Day: FC<Props> = ({ day }) => {
  const { monthIndex, selectedDate, setSelectedDate } =
    useContext(GlobalContext);

  const getBgDayClass = (day: string) => {
    // console.log(dayjs().format('DD-M-YYYY'), day);
    if (day === dayjs().format('DD-M-YYYY')) {
      return 'bg-emerald-500';
    } else if (day === selectedDate) {
      return 'bg-emerald-100';
    } else {
      return '';
    }
  };

  const fontColor = () => {
    return day.format('MM') === dayjs().month(monthIndex).format('MM')
      ? 'text-neutral-700'
      : 'text-slate-500';
  };
  // day.format('DD-M-YYYY')
  // e: React.MouseEvent<HTMLDivElement, MouseEvent>
  const getSelectedDate = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>, str: string) => {
      e.preventDefault();
      setSelectedDate(str);
      // console.log(selectedDate);
    },
    [selectedDate]
  );

  // useEffect(() => {
  //   // setSelectedDate(selectedDate);
  //   console.log('useEffect', selectedDate);
  // }, [selectedDate]);

  return (
    <div
      className={`cursor-pointer border border-emerald-500 flex flex-col ${getBgDayClass(
        day.format('DD-M-YYYY')
      )}`}
      onClick={(e) => getSelectedDate(e, day.format('DD-M-YYYY'))}
    >
      <header className="flex justify-between">
        <p className={`text-sm m-1 font-extrabold ${fontColor()}`}>
          {day.format('DD')}
        </p>
        <p className={`text-sm m-1 font-extrabold ${fontColor()}`}>
          {day.format('dd')[0].toUpperCase()}
          {day.format('dd')[1]}
        </p>
      </header>
    </div>
  );
};

export default Day;
