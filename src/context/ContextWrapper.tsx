import dayjs from 'dayjs';
import { useEffect, useReducer, useState } from 'react';
import { GlobalContext } from './GlobalContext';

interface Props {
  children: JSX.Element;
}

const savedEventReducer = (state: EventState[], { type, payload }: Action) => {
  switch (type) {
    case 'PUSH':
      return [...state, payload];

    case 'UPDATE':
      return state.map((evt) => (evt.id ? payload : evt));

    case 'DELETE':
      return state.filter((evt) => evt.id !== payload.id);
    default:
      throw new Error();
  }
};

export const initEvents = (): EventState[] => {
  const storageEvents = localStorage.getItem('savedEvents');
  const parseEvents = storageEvents ? JSON.parse(storageEvents) : [];

  return parseEvents;
};

const ConstectWrapper: React.FC<Props> = (props) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [selectedDate, setSelectedDate] = useState('');
  const [yearIndex, setYearIndex] = useState(dayjs().year());
  const [daySelected, setDaySelected] = useState(dayjs());
  const [openModalForm, setOpenModalForm] = useState(false);
  const [savedEvents, dispatchCalEvent] = useReducer(
    savedEventReducer,
    [],
    initEvents
  );

  useEffect(() => {
    localStorage.setItem('savedEvents', JSON.stringify(savedEvents));
  }, [savedEvents]);

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        selectedDate,
        setMonthIndex,
        setSelectedDate,
        yearIndex,
        setYearIndex,
        daySelected,
        setDaySelected,
        savedEvents,
        dispatchCalEvent,
        openModalForm,
        setOpenModalForm
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ConstectWrapper;
