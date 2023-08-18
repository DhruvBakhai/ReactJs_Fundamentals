import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../Redux/actions";

function Home() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Home;
