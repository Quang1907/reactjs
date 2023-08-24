import "./App.css";
import { User } from "./User";

function App() {
  const names = ["Quang", "it"];

  const users = [
    {
      name: "Quangit",
      age: 19,
    },
    {
      name: "Quang 1998",
      age: 19,
    },
    {
      name: "Quang it",
      age: 20,
    },
  ];

  return (
    <div className="App">
      {names.map((name, key) => {
        return <h1 key={key}>{name}</h1>;
      })}
      <div>
        {users.map((user, item) => {
          return <User name={user.name} age={user.age} />;
          // return (
          //   <h1 key={item}>
          //     {user.name} - {user.age}
          //   </h1>
          // );
        })}
      </div>
    </div>
  );
}

// const User = (props) => {
//   return (
//     <div>
//       {props.name} - {props.age}
//     </div>
//   );
// };

export default App;
