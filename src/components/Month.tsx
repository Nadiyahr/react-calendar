import dayjs, { Dayjs } from 'dayjs';
import React from 'react';
import { FC } from 'react';
import Day from './Day';

interface Props {
  month: Dayjs[][];
}

/* eslint-disable prettier/prettier */
const Month: FC<Props> = ({ month }) => {
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx: number) => (
            <Day day={day} key={idx} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Month;
