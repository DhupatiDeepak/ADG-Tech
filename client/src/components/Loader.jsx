import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        <div className="mt-4 text-white text-xl font-semibold animate-pulse">Loading...</div>
      </div>
    </div>
  );
};

export default Loader;
