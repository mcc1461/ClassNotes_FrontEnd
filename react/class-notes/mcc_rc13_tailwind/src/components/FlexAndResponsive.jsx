import React from "react";

const FlexAndResponsive = () => {
  const arr=[1,2,3,4,5,6,7,8]
  return (
    <>
      <div className="flex flex-row flex-wrap">
        <div></div>
        <div className="bg-fuchsia-400 basis-1/4">01</div>
        <div className="bg-fuchsia-400 basis-1/4">02</div>
        <div className="bg-fuchsia-400 basis-1/4">03</div>
        <div className="bg-fuchsia-400 basis-1/4">04</div>
        <div className="bg-fuchsia-400 basis-2/4">05</div>
        <div className="bg-fuchsia-400 basis-2/4">06</div>
        <div className="bg-yellow-300">---</div>
      </div>
      <div className="bg-yellow-100"></div>
      <div className="grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
        {arr.map((item) => (
          <div className="mt-2 bg-green-300">{item}</div>
        ))}
        <div></div>
        <div>FlexAndResponsive</div>
      </div>
    </>
  );
};

export default FlexAndResponsive;
