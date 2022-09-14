import dayjs, { Dayjs } from 'dayjs';
import React from 'react';

interface ICalendarContext {
  monthIndex: number;
  selectedDate: string;
  yearIndex: number;
  setMonthIndex: (index: number) => void;
  setSelectedDate: (string: string) => void;
  setYearIndex: (index: number) => void;
  daySelected: Dayjs;
  setDaySelected: (day: Dayjs) => void;
  savedEvents: EventState[] | [];
  dispatchCalEvent: ({ type, payload }: Action) => void;
  openModalForm: boolean;
  setOpenModalForm: (val: boolean) => void;
}

export const defaultState = {
  monthIndex: 0,
  selectedDate: '',
  yearIndex: 0,
  setMonthIndex: () => {},
  setSelectedDate: () => {},
  setYearIndex: () => {},
  daySelected: dayjs(),
  setDaySelected: () => {},
  savedEvents: [],
  dispatchCalEvent: () => {},
  openModalForm: false,
  setOpenModalForm: () => {}
};

export const GlobalContext =
  React.createContext<ICalendarContext>(defaultState);
