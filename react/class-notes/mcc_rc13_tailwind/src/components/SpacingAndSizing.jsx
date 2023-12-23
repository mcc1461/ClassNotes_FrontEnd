import React from "react";

const SpacingAndSizing = () => {
  return (
    <div className="flex-col items-center m-3 space-y-20 text-center">
      <h3 className="text-2xl text-red-500">SpacingAndSizing</h3>
      <p className="text-sm">SpacingAndSizing</p>

      <div className="flex flex-col items-center gap-7">
        <button
          className="items-center self-center p-4 m-1 text-center text-white bg-blue-500 rounded-md ms-3 hover:bg-blue-700 hover:text-yellow-200"
        >
          submit
        </button>

        <button
          className="items-center justify-center w-40 h-40 p-4 m-1 text-3xl text-white bg-green-500 border-2 border-collapse border-black rounded-full ms-3 hover:bg-black hover:text-yellow-200 "
        >
          submit
        </button>
        <button className= "w-20 bg-indigo-500 rounded-full">merhaba</button>
      </div>
    </div>
  );
};

export default SpacingAndSizing;
