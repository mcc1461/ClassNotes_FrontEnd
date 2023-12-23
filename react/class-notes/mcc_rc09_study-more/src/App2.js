
import React, { useEffect, useState } from "react"
// import LifeCycleMethods from "./components/LifeCycleMethods"
// import UseEffectHook from "./components/UseEffectHook"
// import User from "./components/User"
// import Learning from "./components/Learning";

function Person({name, bio, location, avatar, blog}) {
  return (
    <div>
      <img src={avatar} height={150} alt="mcc" />
      <h1>{name}</h1>
      <p>{blog}</p>
      <p>{bio}</p>


    </div>
  );
  }
function App() {
  
  const [data, setData] = useState(null);
  useEffect( () => {
    fetch(
      "https://api.github.com/users/mcc1461"
      // "https://jsonplaceholder.typicode.com/users"
    ).then((res) => res.json())
    .then((data) => setData(data));
    console.log(data);
    // .then(setData); //shorter version
  }, []);
  if (data)
  return <Person name={data.name} bio={data.bio} avatar=
 {data.avatar_url} blog={data.blog}/>;
  return <h1>Data</h1>

};
export default App;
