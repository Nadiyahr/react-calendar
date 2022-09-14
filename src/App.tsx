import './App.css';
import { getMonth } from './util';
import CalendarHeader from './components/CalendarHeader';
import Month from './components/Month';
import { ModalForm } from './components/ModalForm';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from './context/GlobalContext';
import dayjs from 'dayjs';

const App: React.FC = () => {
  const { monthIndex, yearIndex, openModalForm } = useContext(GlobalContext);
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex, yearIndex));
  }, [monthIndex, yearIndex]);
  return (
    <>
      <div className="h-screen flex flex-col p-2 md:px-5">
        <CalendarHeader />
        <Month month={currentMonth} />
        {openModalForm && <ModalForm />}
      </div>
    </>
  );
};

export default App;
