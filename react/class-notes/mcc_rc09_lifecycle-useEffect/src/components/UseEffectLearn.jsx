import React from "react";
import { useEffect, useState } from "react";

const UseEffectLearn = () => {
  const [name, setName] = useState(" ");
  const [surname, setSurname] = useState(" ");
  const [tittle, setTittle] = useState("Learn React");
  useEffect(() => {
    console.log("useEffect çalıştı");
  });
  return (
    <>
      <div className="">
        <label htmlFor="name" className="fw-bold">Name:</label>
        <input id="name" className="px-2 bg-success fs-2 text-light mt-1" type="text" onChange={(e) => setName(e.target.value)} />
       <br />
       <br />
        <label htmlFor="surname" className="fw-bold">Surname:</label>
        <input id="surname" className="px-2 bg-success fs-2 text-light mb-2" type="text" onChange={(e) => setSurname(e.target.value)} />
      </div>
      <h2 className="bg-warning w-25 rounded ">{name}</h2>
      <h2 className="bg-warning w-25 rounded ">{surname}</h2>
      <h2>Merhaba Arkadaşlar...</h2>
    </>
  );
};
function Container () {
  return (
    <div style={{width:"400px", height:"400px", border:"2px solid red"}}>
    </div>
  )
}

export default UseEffectLearn;
