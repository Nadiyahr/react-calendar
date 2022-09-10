import dayjs, { Dayjs } from 'dayjs';
import { utimesSync } from 'fs';
import { SetStateAction, useState } from 'react';
import { GlobalContext } from './GlobalContext';

interface Props {
  children: JSX.Element;
}
const ConstectWrapper: React.FC<Props> = (props) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  return (
    <GlobalContext.Provider value={{ monthIndex, setMonthIndex }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ConstectWrapper;
