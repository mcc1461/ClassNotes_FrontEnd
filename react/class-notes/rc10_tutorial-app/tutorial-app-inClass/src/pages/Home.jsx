import { useEffect } from "react";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import React, { useState } from "react";

  const Home = () => {
    const [tutorials, setTutorials] = useState([]);

    const getTutorials = async () => {     //^ axios ile API'den veri çekme işlemi
      try {
       
        const URL = "https://tutorial-api.fullstack.clarusway.com/tutorials";
        const res = await axios(URL);
        setTutorials(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    
    useEffect(() => {
      getTutorials();
    }
    , []);


  return (
    <div>
      <AddTutorial tutorials={tutorials}/>
      <TutorialList tutorials={tutorials} />
    </div>
  );
};
export default Home;
