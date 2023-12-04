import { useState } from "react";

const UseStateObject = () => {
  // const [person, setPerson] = useState("John")
  // const [age, setAge] = useState(24)
  // const [job, setJob] = useState("Developer")
  // const [person, setPerson] = useState({ name: "John", age: 24, job: "Developer" })
  const [person, setPerson] = useState({
    name: "John",
    age: 24,
    job: "Developer",
  });
  const { name, age, job } = person;

  const [toggle, setToggle] = useState(true);
  //   let toggle = true;¨
  const handleSwap = () => {
    setToggle(!toggle);
    // toggle = !toggle;
    if (toggle) {
      setPerson({ ...person, name: "John", age: 24, job: "Developer" });
    } else {
      setPerson({ ...person, name: "Peter", age: 30, job: "Designer" });
    }
  };

  return (
    <div className="text-primary d-flex flex-column">
      <h1>Personal Form</h1>
      <h2>Name:{name}</h2>
      <h3>Job:{job}</h3>
      <h3>Age:{age}</h3>
      <div className="col col-12 p-2">
        <button
          className="btn btn-danger mx-1"
          onClick={() => setPerson({ ...person, name: "Peter" })}
        >
          Name
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={() => setPerson({ ...person, age: age + 1 })}
        >
          Age
        </button>
        <button
          className="btn btn-success mx-1"
          onClick={() => setPerson({ ...person, job: "Designer" })}
        >
          Job
        </button>
        <button
          className="btn btn-warning mx-1"
          onClick={() =>
            setPerson({ ...person, name: "John", age: 24, job: "Developer" })
          }
        >
          All
        </button>
        <button
          className="btn btn-secondary  mx-1 "
          onClick={() => {
            handleSwap();
          }}
        >
          Swap
        </button>
      </div>
    </div>
  );
};

export default UseStateObject;
