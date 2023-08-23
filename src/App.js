import "./App.css";

function App() {
  const age = 17;
  const isGreen = true;

  // if (age > 15) {
  //   return <h1>is over age</h1>;
  // } else {
  //   return <h1>is under age</h1>;
  // }
  return (
    <div className="App">
      {age > 18 ? <h1>is over age</h1> : <h1>is under age</h1>}
      <h2 style={{ color: isGreen ? "green" : "red" }}>this has color</h2>
      {isGreen && <button>this is a button</button>}
    </div>
  );
}

export default App;
