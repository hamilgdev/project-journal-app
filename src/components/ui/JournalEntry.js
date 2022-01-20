import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";

import { activeNote } from "../../store/actions/notesAction";

const JournalEntry = ({ id, title, body, date, urlImage }) => {
  const dispatch = useDispatch();
  const noteDate = moment(date);

  const handleEntryActive = () => {
    dispatch(
      activeNote(id, {
        title,
        body,
        date,
        urlImage,
      })
    );
  };

  return (
    <article
      className="flex min-w-[300px] | overflow-hidden bg-white rounded-md shadow-sm cursor-pointer transition transition-300 | hover:bg-gray-100"
      onClick={handleEntryActive}
    >
      {urlImage && (
        <figure
          className="w-12 | bg-cover bg-center"
          style={{
            backgroundImage: `url(${urlImage})`,
          }}
        ></figure>
      )}

      <main className="flex-1 flex justify-between | px-4 py-2">
        <header className="mr-2 max-w-[200px]">
          <h4 className="truncate text-sm font-semibold text-gray-600">
            {title}
          </h4>
          <p className="truncate text-xs text-gray-400">{body}</p>
        </header>

        <footer>
          <div className="text-xs text-gray-600 font-semibold">
            {noteDate.format("dddd")}
          </div>
          <div className="text-md text-center font-bold text-gray-400">
            {noteDate.format("Do")}
          </div>
        </footer>
      </main>
    </article>
  );
};

export default JournalEntry;
