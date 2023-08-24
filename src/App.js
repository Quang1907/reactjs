import "./App.css";
// import { User } from "./User";

function App() {
  const planets = [
    { name: "mars", isGasPlanet: false },
    { name: "earth", isGasPlanet: true },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
  ];
  return (
    <div className="App">
      {planets.map(
        (planet, key) => planet.isGasPlanet && <h1 key={key}>{planet.name}</h1>
      )}
    </div>
  );
}

export default App;
