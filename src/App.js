import "./App.css";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [showText, setShowText] = useState(true);
  const [textColor, setTextColor] = useState("green");

  const handleChangeValue = (event) => {
    setInputValue(event.target.value);
  };

  const handleClickButton = () => {
    setShowText(!showText);
  };
  return (
    <div className="App">
      <input type="text" value={inputValue} onChange={handleChangeValue} />
      <button onClick={handleClickButton}>show/hide</button>
      <button
        onClick={() => {
          setTextColor(textColor === "red" ? "green" : "red");
        }}
      >
        change red color
      </button>
      {showText === true && <h1 style={{ color: textColor }}>{inputValue}</h1>}
    </div>
  );
}

export default App;
