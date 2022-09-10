import './App.css';
import { getMonth } from './util';
import CalendarHeader from './components/CalendarHeader';
import Month from './components/Month';
import { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  // useEffect()
  return (
    <>
      <div className="h-screen flex flex-colums">
        <CalendarHeader />
        <Month month={currentMonth} />
      </div>
    </>
  );
};

export default App;
