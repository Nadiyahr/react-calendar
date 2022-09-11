import { type } from '@testing-library/user-event/dist/type';
import dayjs, { Dayjs } from 'dayjs';
import { utimesSync } from 'fs';
import { SetStateAction, useState } from 'react';
import { defaultState, GlobalContext } from './GlobalContext';

interface Props {
  children: JSX.Element;
}

export type Action = 'SET_MONTH' | 'SET_DATE';

const ConstectWrapper: React.FC<Props> = (props) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [selectedDate, setSelectedDate] = useState('');
  // const [yearIndex, setYearIndex] = useState(dayjs().year());

  return (
    <GlobalContext.Provider
      value={{ monthIndex, selectedDate, setMonthIndex, setSelectedDate }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ConstectWrapper;
