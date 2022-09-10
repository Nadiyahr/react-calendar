import dayjs from 'dayjs';
import React from 'react';

export const GlobalContext = React.createContext({
  monthIndex: dayjs().month(),
  setMonthIndex: (index: number) => {}
});
