// Importing React and the useState hook from the React library.
import React, { useState } from "react"; 
// Importing the CSS styles specific to this application.
import "./App.css"; 
// Importing Bootstrap's minified CSS for styling.
import "bootstrap/dist/css/bootstrap.min.css"; 

// Declaring a functional component named Mcc.
const Mcc = () => { 
  // Initializing a state variable 'count' with a default value of 0 and a setter 'setCount'.
  const [count, setCount] = useState(0); 
  // Starting the JSX return block.
  return ( 
    // Using "React Fragment" to group multiple elements without adding an extra node to the DOM.
    <> 
      {/* Adding Bootstrap-styled div for the counter. */}
      <div className="m-5 rounded bg-warning w-25 d-flex justify-content-between text-dark"> 
        {/* Adding button to increment the count, styled with Bootstrap. */}
        <button className="btn btn-success" onClick={() => setCount(count + 1)}> 
          inc 
        </button>
        {/* Displaying the current count value. */}
        <h1> {count} </h1> 
        {/* Adding button to decrement the count, styled with Bootstrap. */}
        <button 
          className="btn btn-danger"
          // Only decrementing the count if it's greater than 0. (preventing negative values)
          onClick={() => count > 0 && setCount(count - 1)} 
        >
          dec 
        </button>
      </div>
      {/* Using a styled div with a friendly message. (Otherwise with one element fragment does not work) */} 
      <div className="p-5 m-4 fw-bold fs-2 text-dark">Happy Coding!</div> 
    </> 
  );
};

// Defining the main App component.
export default function App() { 
  // Rendering the Mcc component within the App component.
  return <Mcc />; 
}


