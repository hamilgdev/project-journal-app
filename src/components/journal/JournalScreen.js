import React from "react";
import NoteAppBar from "../notes/NoteAppBar";
import NoteScreen from "../notes/NoteScreen";
import NothingSelected from "../ui/NothingSelected";
import Sidebar from "../ui/Sidebar";

const JournalScreen = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar className="flex-1 flex flex-col p-4 min-w-[400px] max-w-[400px] | bg-slate-100" />

      <main className="flex-1">
        <NoteScreen />
      </main>
    </div>
  );
};

export default JournalScreen;
