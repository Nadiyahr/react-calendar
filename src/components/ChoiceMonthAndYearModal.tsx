import dayjs from 'dayjs';
import { type } from 'os';
import React, { useState } from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { getMonthModal } from '../util';

type Props = {
  closeModal: () => void;
};

export const ChoiceMontAndYearModal: React.FC<Props> = ({ closeModal }) => {
  const { monthIndex, yearIndex, setMonthIndex, setYearIndex } =
    useContext(GlobalContext);
  const [monthIdx, setMonthIdx] = useState<number>(monthIndex);
  const months = getMonthModal();
  // const years = getYearsModal();

  const handlePrevMonth = () => {
    setYearIndex(yearIndex - 1);
  };

  const handleNextMonth = () => {
    setYearIndex(yearIndex + 1);
  };

  const selectedMonthClass = (idx: number) => {
    setMonthIdx(idx);
    setMonthIndex(idx);
  };

  const classBgSelected = (idx: number) => {
    // console.log(idx === monthIdx);
    return monthIdx === idx ? 'bg-gray-100' : '';
  };

  return (
    <div className="bg-white shadow-xl w-full absolute top-10 left-0 justify-center items-center p-2 border rounded">
      <div>
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <button onClick={handlePrevMonth}>
            <span className="cursor-pointer text-gray-600 text-2xl">
              &#10094;
            </span>
          </button>
          <div className="text-center">
            <p className="font-semibold text-2xl w-40">
              {dayjs().year(yearIndex).format('YYYY')}
            </p>
          </div>
          <button onClick={handleNextMonth}>
            <span className="cursor-pointer text-gray-600 text-2xl">
              &#10095;
            </span>
          </button>
          {/* <button onClick={() => setDisplayMonth(false)}>
            {dayjs().month(monthIndex).format('MMM')}
          </button>
          <h3>{dayjs().year(yearIndex).format('YYYY')}</h3>
          <button onClick={() => setDisplayMonth(true)}>
            {dayjs().year(yearIndex).format('YYYY')}
          </button> */}
          <button onClick={closeModal}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </header>
        {/* {displayMoth ? (
          <div className="flex-1 grid grid-cols-3 grid-rows-4 border"></div>
        ) : ( */}
        <div className="flex-1 grid grid-cols-3 grid-rows-4 border">
          {months.map((row: (string | number)[][], i: number) => (
            <React.Fragment key={i}>
              {row.map(([desc, index], idx: number) => (
                <button
                  key={idx}
                  className={`cursor-poiner border border-gray-200 ${classBgSelected(
                    +index
                  )}`}
                  onClick={() => {
                    setMonthIndex(+index);
                    selectedMonthClass(+index);
                  }}
                >
                  {desc}
                </button>
              ))}
            </React.Fragment>
          ))}
        </div>
        {/* )} */}
      </div>
    </div>
  );
};
