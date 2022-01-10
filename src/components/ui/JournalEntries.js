import React from "react";

import JournalEntry from "./JournalEntry";

const JournalEntries = () => {
  const entries = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="flex flex-col gap-2">
      {entries.map((entry, index) => (
        <JournalEntry key={index} {...entry} />
      ))}
    </div>
  );
};

export default JournalEntries;
