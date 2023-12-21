import React from "react";

const SpacingAndSizing = () => {
  return (
    <div className="flex-col m-3 space-y-20 items-center text-center">
      <h3 className="text-2xl text-red-500">SpacingAndSizing</h3>
      <p className="text-sm">SpacingAndSizing</p>

      <div className="flex flex-col items-center gap-7">
        <button
          className="  bg-blue-500 items-center text-center self-center text-white p-4 m-1 ms-3
    hover:bg-blue-700 hover:text-yellow-200 rounded-md"
        >
          submit
        </button>

        <button
          className="bg-green-500 text-white p-4 m-1 ms-3
    hover:bg-black hover:text-yellow-200
    border-collapse border-2 border-black
    rounded-full h-40 w-40 items-center justify-center text-3xl
    "
        >
          submit
        </button>
      </div>
    </div>
  );
};

export default SpacingAndSizing;
