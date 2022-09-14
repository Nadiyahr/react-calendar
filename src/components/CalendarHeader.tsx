import { useContext, useState } from 'react';
import dayjs from 'dayjs';
import { GlobalContext } from '../context/GlobalContext';
import { ChoiceMontAndYearModal } from './ChoiceMonthAndYearModal';

const CalendarHeader: React.FC = () => {
  const {
    monthIndex,
    setMonthIndex,
    yearIndex,
    setYearIndex,
    setOpenModalForm
  } = useContext(GlobalContext);
  const [openModal, setOpenModal] = useState(false);

  const handlePrevMonth = () => {
    if (dayjs().month(monthIndex).format('MMMM') === 'January') {
      setMonthIndex(monthIndex - 1);
      setYearIndex(yearIndex - 1);
    } else {
      setMonthIndex(monthIndex - 1);
    }
  };

  const handleNextMonth = () => {
    if (dayjs().month(monthIndex).format('MMMM') === 'December') {
      setMonthIndex(monthIndex + 1);
      setYearIndex(yearIndex + 1);
    } else {
      setMonthIndex(monthIndex + 1);
    }
  };

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const setToday = () => {
    setMonthIndex(dayjs().month());
    setYearIndex(dayjs().year());
  };

  return (
    <header className="px-0 md:px-4 py-2 flex justify-between mb-2">
      <button
        className="bg-blue-500 text-white rounded-full text-center text-2xl w-9 md:w-11 pb-1 cursor-pointer"
        onClick={() => setOpenModalForm(true)}
      >
        +
      </button>
      <div className="flex justify-evenly text-l md:text-2xl relative">
        {openModal && <ChoiceMontAndYearModal closeModal={handleOpenModal} />}
        <button
          className="mx-2 py-1 px-2 border-2 rounded cursor-pointer"
          onClick={setToday}
        >
          Today
        </button>
        <button onClick={handlePrevMonth}>
          <span className="cursor-pointer text-gray-600">&#10094;</span>
        </button>
        <div className="flex justify-evenly w-40 md:w-56 items-center">
          <span className="font-semibold">
            {dayjs().month(monthIndex).format('MMMM')}
          </span>
          <span className="font-semibold ">
            {dayjs().year(yearIndex).format('YYYY')}
          </span>
        </div>
        <button onClick={handleNextMonth}>
          <span className="cursor-pointer text-gray-600">&#10095;</span>
        </button>
        <button
          className="ml-2 py-1 px-2 border-2 rounded cursor-pointer"
          onClick={handleOpenModal}
        >
          <span className="fa fa-calendar" aria-hidden="true"></span>
        </button>
      </div>
    </header>
  );
};

export default CalendarHeader;
