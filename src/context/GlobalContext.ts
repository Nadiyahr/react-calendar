import { Action } from './ContextWrapper';
import dayjs from 'dayjs';
import React from 'react';

interface ICalendarContext {
  monthIndex: number;
  selectedDate: string;
  setMonthIndex: (index: number) => void;
  setSelectedDate: (string: string) => void;
}

export const defaultState = {
  monthIndex: 0,
  selectedDate: '',
  setMonthIndex: () => {},
  setSelectedDate: () => {}
};

export const GlobalContext =
  React.createContext<ICalendarContext>(defaultState);
