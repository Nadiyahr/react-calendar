import { FC } from 'react';
import { Dayjs } from 'dayjs';

interface Props {
  day: Dayjs;
}

const Day: FC<Props> = ({ day }) => {
  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex justify-between">
        <p className="text-xs m-1">{day.format('DD')}</p>
        <p className="text-xs m-1">
          {day.format('dd')[0].toUpperCase()}
          {day.format('dd')[1]}
        </p>
      </header>
    </div>
  );
};

export default Day;
