import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={() => setCount(0)}>set to zero</button>
      {count}
    </div>
  );
}

export default App;
