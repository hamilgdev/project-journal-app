import React from "react";

const NothingSelected = () => {
  return (
    <div className="flex items-center justify-center flex-col p-4 min-h-screen | bg-violet-400">
      <span className="text-2xl">☀</span>
      <p className="mt-2 leading-snug font-semibold text-sm text-white">
        Select something or <br /> create an new entry!
      </p>
    </div>
  );
};

export default NothingSelected;
