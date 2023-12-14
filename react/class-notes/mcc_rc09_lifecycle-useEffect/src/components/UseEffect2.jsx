import React, { useState, useEffect } from "react";

export default function UseEffect2() {
  const [resourceType, setResourceType] = useState("posts");
  const [i, setI] = useState([]);


  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((r) => r.json())
      .then((d) => setI(d));
  } 
  , [resourceType]
  );


  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {i.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
      <h3>item</h3>
    </>
  );
}
