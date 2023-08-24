import "./App.css";
import { useState } from "react";

function App() {
  const [age, setAge] = useState(0);

  const handleIncreaseAge = () => {
    setAge(age + 1);
    console.log(age);
  };
  return (
    <div className="App">
      {age}
      <button onClick={handleIncreaseAge}>Increase age</button>
    </div>
  );
}

export default App;
