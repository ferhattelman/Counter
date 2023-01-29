import React from "react";
import { useState } from "react";
import "./App.css";

function App(){
  const [count, setCount] = useState(0);

  const Increase = () => {
    setCount(count + 1)
  };

  const Decrease = () => {
    setCount(count - 1)
  };

  return(
    <div className="App-header">
      <h1>{count}</h1>
      <button onClick={Increase}>Increase</button>
      <br></br>
      <button onClick={Decrease}>Decrease</button>
    </div>
  )
}

export default App;
