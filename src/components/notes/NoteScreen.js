import React from "react";
import NoteAppBar from "./NoteAppBar";

const NoteScreen = () => {
  const urlImage =
    "https://www.somoswaka.com/wp-content/uploads/2017/03/apple_thinkdifferent.jpg";
  return (
    <section className="flex flex-col h-full">
      <NoteAppBar />

      <article className="flex flex-col flex-1 p-4">
        <div className="mb-2">
          <input
            type="text"
            placeholder="Some awesome idea..."
            className="w-full outline-none | text-md font-semibold text-gray-600"
            autoComplete="off"
          />
        </div>

        <div className="mb-2 flex-1">
          <textarea
            placeholder="What happened today..."
            className="h-full w-full resize-none outline-none | text-sm text-gray-800"
            autoComplete="off"
          ></textarea>
        </div>
      </article>

      <footer className="p-4 | bg-slate-200">
        <figure className="max-w-[128px]">
          <img
            src={urlImage}
            alt="imagen"
            className="rounded-md shadow-lg | bg-cover bg-center"
          />
        </figure>
      </footer>
    </section>
  );
};

export default NoteScreen;
