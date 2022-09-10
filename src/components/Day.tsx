import { FC, useContext } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { GlobalContext } from '../context/GlobalContext';

interface Props {
  day: Dayjs;
}

const Day: FC<Props> = ({ day }) => {
  const { monthIndex } = useContext(GlobalContext);

  const getCurrentDayClass = () => {
    return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
      ? 'bg-emerald-200'
      : '';
  };

  const fontColor = () => {
    return day.format('MM') === dayjs().month(monthIndex).format('MM')
      ? 'text-neutral-700'
      : 'text-slate-500';
  };
  return (
    <div
      className={`cursor-pointer border border-emerald-500 flex flex-col ${getCurrentDayClass()}`}
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
