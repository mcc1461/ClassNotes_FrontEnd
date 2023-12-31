import "./App.css";
import Counter from "./components/counter/Counter";
import Todo from "./components/todo/Todo";
import { Provider } from "react-redux";
import { storage } from "./store/store";


function App() {
  return (
    <div className="app">
      <Provider store={storage}>
        <Counter />
        <Todo />
      </Provider>
    </div>
  );
}
export default App;
