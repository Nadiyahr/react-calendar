import { FC, useCallback, useContext, useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { GlobalContext } from '../context/GlobalContext';

interface Props {
  day: Dayjs;
}

const Day: FC<Props> = ({ day }) => {
  const {
    monthIndex,
    selectedDate,
    setSelectedDate,
    setDaySelected,
    savedEvents,
    dispatchCalEvent,
    daySelected
  } = useContext(GlobalContext);

  const [dayEvents, setDayEvents] = useState<EventState[] | []>([]);

  useEffect(() => {
    const events = savedEvents.filter(
      (evt) => dayjs(evt.day).format('DD-MM-YY') === day.format('DD-MM-YY')
    );

    setDayEvents(events);
  }, [savedEvents]);

  const getBgDayClass = () => {
    if (day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')) {
      return 'bg-emerald-300';
    } else if (day === daySelected) {
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

  const getSelectedDate = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>, str: string) => {
      e.preventDefault();
      setSelectedDate(str);
    },
    [selectedDate]
  );
  console.log(day === daySelected);
  return (
    <div
      className={`cursor-pointer border border-gray-200 flex flex-col ${getBgDayClass()}`}
      onClick={(e) => {
        getSelectedDate(e, day.format('DD-M-YYYY'));
        setDaySelected(day);
      }}
    >
      <header className="flex justify-between">
        <p className={`text-sm m-1 font-extrabold ${fontColor()}`}>
          {day.format('DD')}
        </p>
        {day === daySelected && (
          <button className="mx-2 py-1 px-2 border-2 rounded cursor-pointer text-xs">
            + Add new idea
          </button>
        )}
        <p className={`text-sm m-1 font-extrabold ${fontColor()}`}>
          {day.format('dd')[0].toUpperCase()}
          {day.format('dd')[1]}
        </p>
      </header>
      <div className="flex cursor-pointer">{''}</div>
    </div>
  );
};

export default Day;
