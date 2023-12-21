import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";

const Home = () => {
  return (
    <div className="p-3 m-2">
      <AddTutorial />
      <TutorialList />
    </div>
  );
};

export default Home;
