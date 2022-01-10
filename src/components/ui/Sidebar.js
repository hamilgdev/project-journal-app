import React from "react";
import JournalEntries from "./JournalEntries";

const Sidebar = ({ className }) => {
  return (
    <aside className={className}>
      <div className="flex items-center justify-between">
        <h3 className="leading-snug font-semibold text-gray-600 text-md">
          <span className="mr-1">🌓</span>
          Miltoncodeyt
        </h3>

        <button className="px-4 py-1 | leading-snug border border-1 border-gray-300 text-gray-500 text-xs rounded-md transition duration-300 | hover:bg-gray-300 hover:text-white">
          Logout
        </button>
      </div>

      <div className="my-6 text-center">
        <button className="p-6 | w-full border border-dashed border-gray-400 rounded-md text-gray-400 text-md transition duration-300 | hover:border-gray-500 hover:text-gray-500">
          New entry
        </button>
      </div>

      <div className="relative h-full">
        <div className="absolute w-full h-full overflow-y-auto pr-2">
          <JournalEntries />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
