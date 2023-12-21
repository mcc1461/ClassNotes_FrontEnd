import { useState } from "react";
// Remove the unused import of 'tw'
// import tw from "twin.macro";
import styled, { ThemeProvider } from "styled-components";

const theme = {
  prime1: "teal",
  prime2: "blue",
};

const MCC = styled.div`
  background-color: ${(props) => (props.theme.prime1 ? "red" : "blue")};
  border-radius: 5px;
  padding: 20px;
  margin: 20px 0;
  color: white;
  &:hover {
    background-color: ${(props) => (props.prime2 ? "red" : "blue")};
  }
`;

const AddTutorial = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {};

  return (
    <>
      <ThemeProvider theme={theme}>
        <myStyle>
          <h1>My styled component</h1>
        </myStyle>
        <div className="flex-col grid-cols-3 gap-3 m-5 w-100 h-100 p-9 bg-violet-200">
          <h1 className="text-2xl font-extrabold text-center text-red-900">
            Add Your Tutorial
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="text-center">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter your title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="text-center">
              <label htmlFor="desc" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="desc"
                placeholder="Enter your Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></input>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="p-2 mt-3 text-center text-blue-800 bg-red-300 border-2 rounded-xl"
              >
                Submit
              </button>
            </div>
          </form>
          <MCC className="font-extrabold text-center ">mcc1461</MCC>
        </div>
      </ThemeProvider>
    </>
  );
};

export default AddTutorial;
