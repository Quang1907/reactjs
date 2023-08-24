import "./App.css";
import { useState, useEffect } from "react";
import { Text } from "./Text";

function App() {
  const [showText, setShowText] = useState(false);

  const handleShowInputText = () => {
    setShowText(!showText);
  };

  return (
    <div className="App">
      <button onClick={handleShowInputText}>Show input text</button>
      {showText && (
        <div>
          <Text />
        </div>
      )}
    </div>
  );
}

export default App;
