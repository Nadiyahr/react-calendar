import './App.css';
import { getMonth } from './util';
import CalendarHeader from './components/CalendarHeader';
import Month from './components/Month';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from './context/GlobalContext';

const App: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <>
      <div className="h-screen flex flex-col p-9">
        <CalendarHeader />
        <Month month={currentMonth} />
      </div>
    </>
  );
};

export default App;
