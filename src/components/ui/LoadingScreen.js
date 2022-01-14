import React from "react";
import Loader from "./Loader";

const LoadingScreen = () => {
  return (
    <div className="flex justify-center items-center min-h-screen | bg-purple-600">
      <Loader />
    </div>
  );
};

export default LoadingScreen;
