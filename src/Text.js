import { useState, useEffect } from "react";

export const Text = () => {
  const [text, setText] = useState("");

  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    console.log("component mounted");
    return () => {
      console.log("component unmounted");
    };
  }, []);

  return (
    <div>
      <input onChange={handleChangeText} value={text} /> <h2>{text}</h2>
    </div>
  );
};
