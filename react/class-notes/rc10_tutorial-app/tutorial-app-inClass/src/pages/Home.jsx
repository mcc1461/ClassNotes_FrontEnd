import { useEffect } from "react";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import React, { useState } from "react";

  const Home = () => {
    const [tutorials, setTutorials] = useState([]);

    const getTutorials = async () => {
      const URL = "https://tutorial-api.fullstack.clarusway.com/tutorials";
      const res = await axios(URL);
      setTutorials(res.data);
      console.log(tutorials, res.data);
    };
    
    useEffect(() => {
      getTutorials();
    }
    , []);


  return (
    <div>
      <AddTutorial />
      <TutorialList />
    </div>
  );
};
export default Home;
