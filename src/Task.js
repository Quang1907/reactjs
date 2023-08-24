export const Task = (props) => {
  return (
    <div
      className="task"
      style={{ background: props.completed ? "green" : "red" }}
    >
      <h1 key={props.id}>{props.taskName}</h1>
      <button onClick={() => props.handleCompletedTask(props.id)}>
        Completed
      </button>
      <button onClick={() => props.handleDeleteTask(props.id)}>x</button>
    </div>
  );
};
