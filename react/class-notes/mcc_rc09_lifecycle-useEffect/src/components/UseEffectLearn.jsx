import React from "react";
import { useEffect, useState } from "react";
import Container from "./Container";
import { Header } from "./Header";

const UseEffectLearn = () => {
  const [name, setName] = useState(" ");
  const [surname, setSurname] = useState(" ");
  const [title, setTitle] = useState("Learn React");
  const [number, setNumber] = useState(3033);

  useEffect(() => {
    console.log("useEffect çalıştı");
  }, []);
  return (
    <>
      <Header bb={title}/>
      <div className="">
        <label htmlFor="name" className="fw-bold">
          Name:
        </label>
        <input
          id="name"
          className="px-2 bg-success fs-2 text-light mt-1"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="surname" className="fw-bold">
          Surname:
        </label>
        <input
          id="surname"
          className="px-2 bg-success fs-2 text-light mb-2"
          type="text"
          onChange={(e) => setSurname(e.target.value)}
        />
      </div>
      <h2 className="bg-warning w-25 rounded ">{name}</h2>""
      <h2 className="bg-warning w-25 rounded ">{surname}</h2>
      <h2>Merhaba Arkadaşlar...</h2>
      <button className={"btn btn-info p-2 mb-2"}
      onClick={() => {setTitle("Merhaba", "Ali"); setNumber(number+3)}}
      >change</button>
      <Container title={title} number={number} />
    </>
  );
};



export default UseEffectLearn;
