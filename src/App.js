import "./App.css";

function App() {
  const name = <h1>Quang</h1>;
  const age = <h1>21</h1>;
  const email = <h1>Quang@gmail.com</h1>;

  // const use = (
  //   <div>
  //     {name} - {age} - {email}
  //   </div>
  // );
  return (
    <div className="App">
      {/* {User(name, age, email)} */}
      <User name={name} age={age} email={email} />
      <Job salary={70000} position="Senior" company="hue" />
      <Job salary={80000} position="Junior" company="danang" />
      <Job salary={90000} position="Protect Manager" company="sg" />
    </div>
  );
}

const Job = (props) => {
  return (
    <div>
      <h2>Salary - {props.salary}</h2>
      <h2>Position - {props.position}</h2>
      <h2>Company - {props.company}</h2>
    </div>
  );
};

const User = (props) => {
  return (
    <div>
      {props.name} - {props.age} - {props.email}
    </div>
  );
};

export default App;
