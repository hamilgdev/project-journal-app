import React from "react";

const JournalEntry = () => {
  const urlImage =
    "https://www.somoswaka.com/wp-content/uploads/2017/03/apple_thinkdifferent.jpg";
  return (
    <article className="flex min-w-[300px] | overflow-hidden bg-white rounded-md shadow-sm cursor-pointer transition transition-300 | hover:bg-gray-100">
      <figure
        className="w-12 | bg-cover bg-center"
        style={{
          backgroundImage: `url(${urlImage})`,
        }}
      ></figure>

      <main className="flex-1 flex justify-between | px-4 py-2">
        <header className="mr-2 max-w-[200px]">
          <h4 className="text-sm font-semibold text-gray-600">Title card</h4>
          <p className="truncate text-xs text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            elementum risus nibh
          </p>
        </header>

        <footer className="">
          <div className="text-xs text-gray-600 font-semibold">Monday</div>
          <div className="text-md text-center font-bold text-gray-400">28</div>
        </footer>
      </main>
    </article>
  );
};

export default JournalEntry;
