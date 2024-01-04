import { useSelector, useDispatch } from "react-redux"
import "./Counter.css"
import { increment, decrement, clear } from "../../store/counterReducer";

const Counter = () => {

  //^^^ consuming required:
  const count = useSelector((state) => state.count);
  
  const dispatch = useDispatch();

  return (
    <div className="app">
      <h2 className="counter-header underlined">Counter With Redux</h2>
      <h1>counter:{count} </h1>
      <div>
        <button className="counter-button positive" onClick={() => dispatch(increment())}>increase</button>
        <button className="counter-button zero" onClick={() => dispatch(clear())}>reset</button>
        <button className="counter-button negative" onClick={() => dispatch(decrement())}>decrease</button>
      </div>
    </div>
  )
}

export default Counter