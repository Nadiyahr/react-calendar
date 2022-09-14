import userEvent from '@testing-library/user-event';
import { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';

export const ModalForm: React.FC = () => {
  const { daySelected, dispatchCalEvent, setOpenModalForm } =
    useContext(GlobalContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [time, setTime] = useState('');
  const labelsClasses = ['indigo', 'gray', 'green', 'blue', 'red', 'purple'];
  const [selectedLabel, setSelectedLabel] = useState(labelsClasses[0]);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const calenarEvent = {
      title,
      description,
      label: selectedLabel,
      day: daySelected.valueOf(),
      time,
      id: Date.now()
    };

    dispatchCalEvent({ type: ActionType.PUSH, payload: calenarEvent });
    setOpenModalForm(false);
  };

  return (
    <div className="h-screen w-full fixed top-0 left-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-3/5 md:w-2/5 lg:w-1/4 h-fit">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center rounded-t-lg">
          <p className="text-gray-400 text-xl font-semibold">
            Add new idea item
          </p>
          <button
            className="text-gray-400"
            onClick={() => setOpenModalForm(false)}
          >
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <label
              htmlFor="title"
              className="text-gray-300 text-l font-semibold px-1 relative"
            >
              Title*
              <input
                id="title"
                type="text"
                name="title"
                placeholder="Add title"
                value={title}
                required
                className="p-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-grey-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                onChange={(e) => setTitle(e.target.value)}
              />
              <span className="absolute bottom-2 right-3 text-gray-300">
                <i className="fa fa-address-card" aria-hidden="true"></i>
              </span>
            </label>
            <label
              htmlFor="description"
              className="text-gray-300 text-l font-semibold px-1 relative"
            >
              Description
              <textarea
                name="description"
                value={description}
                className="p-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-grey-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <div className="flex gap-x-10">
              <label
                htmlFor="date"
                className="text-gray-300 text-l font-semibold px-1"
              >
                Date
                <input
                  name="date"
                  placeholder={daySelected.format('DD.MM.YYYY')}
                  className="p-3 border-0 text-gray-600 text-xl font-semibold pb-3 w-full border-b-2 border-grey-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                />
              </label>
              <label
                htmlFor="time"
                className="text-gray-300 text-l font-semibold px-1"
              >
                Begin Time
                <input
                  id="time"
                  type="time"
                  value={time}
                  className="py-3 border-0 text-gray-600 text-xl font-semibold w-full border-b-2 border-grey-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                  onChange={(e) => setTime(e.target.value)}
                />
              </label>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-x-2">
                {labelsClasses.map((lblClass, i) => (
                  <span
                    key={i}
                    onClick={() => setSelectedLabel(lblClass)}
                    className={`border bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justyfy-center cursor-pointer`}
                  >
                    {selectedLabel === lblClass && (
                      <span className="text-white text-sm p-1">
                        <i className="fa fa-check" aria-hidden="true"></i>
                      </span>
                    )}
                  </span>
                ))}
              </div>
              <span className="bottom-2 mr-3.5 text-gray-300">
                <i className="fa fa-bookmark" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>
        <footer className="flex justify-end w-100 border-t p-3 mt-5">
          <button
            type="submit"
            onClick={(e) => handleSubmit(e)}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
};
