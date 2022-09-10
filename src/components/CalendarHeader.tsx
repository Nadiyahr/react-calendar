import { useContext } from 'react';
import dayjs from 'dayjs';
import { GlobalContext } from '../context/GlobalContext';

/* eslint-disable prettier/prettier */
const CalendarHeader: React.FC = () => {
  const { monthIndex, setMonthIndex} = useContext(GlobalContext);

  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  };

  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };

  return (
    <header className="px-4 py-2 flex justify-between mb-2">
      <div className="bg-blue-500 text-white rounded-full text-center text-2xl w-9 pb-1 cursor-pointer">+</div>
     <div className="flex justify-evenly">
     <button onClick={handlePrevMonth}>
        <span className="cursor-pointer text-gray-600 text-2xl">
          &#10094;
        </span>
      </button>
      <div className="text-center">
       <p className="font-semibold text-2xl w-56">{dayjs().month(monthIndex).format('MMMM YYYY')}</p>
      </div>
      <button onClick={handleNextMonth}>
        <span className="cursor-pointer text-gray-600 text-2xl">
          &#10095;
        </span>
      </button>
      <div className="ml-2 py-1 px-2 border-2 cursor-pointer">
        <span className="fa fa-calendar"></span>
      </div>
     </div>
    </header>
  );
};

export default CalendarHeader;
