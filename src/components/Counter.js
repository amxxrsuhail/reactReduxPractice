import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.count);
  const showCounter = useSelector((state) => state.counter.showCounter)

  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" })
  }

  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" })
  }

  const increaseHandler = () => {
    dispatch({ type: "INCREASE", payload: 5 })
  }

  const decreaseHandler = () => {
    dispatch({ type: "DECREASE", payload: 5 })
  }

  const toggleCounterHandler = () => {
    dispatch({ type: "TOGGLE", showCounter: !showCounter })
  }

  return (
    <main className={classes.counter} >
      <h1>Redux Counter</h1>
      {showCounter && (<div className={classes.value}>{counter}</div>
      )}
      <div>
        <button onClick={incrementHandler}>+</button>
        <button onClick={increaseHandler}>+5</button>
        <button onClick={decreaseHandler}>-5</button>
        <button onClick={decrementHandler}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
