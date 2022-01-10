import React from "react";

const NoteAppBar = () => {
  return (
    <header className="flex items-center py-2 px-4 | bg-violet-400">
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-1 | text-white font-semibold text-xs">
          <span>28,</span>
          <span>August</span>
          <span>2020</span>
        </div>
        <div className="flex gap-2">
          <button className="py-1 px-4 | rounded-md text-xs transition duration-300 | bg-violet-600 text-violet-800 | hover:text-white">
            Picture
          </button>
          <button className="py-1 px-4 | rounded-md text-xs transition duration-300 | bg-violet-900 text-violet-600 | hover:text-white">
            Save
          </button>
        </div>
      </div>
    </header>
  );
};

export default NoteAppBar;
