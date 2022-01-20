import React from "react";
import { useSelector } from "react-redux";

import NoteScreen from "../notes/NoteScreen";
import NothingSelected from "../ui/NothingSelected";
import Sidebar from "../ui/Sidebar";

const JournalScreen = () => {
  const { active } = useSelector((state) => state.notes);

  return (
    <div className="flex min-h-screen">
      <Sidebar className="flex-1 flex flex-col p-4 min-w-[400px] max-w-[400px] | bg-slate-100" />

      <main className="flex-1">
        {active ? <NoteScreen /> : <NothingSelected />}
      </main>
    </div>
  );
};

export default JournalScreen;
