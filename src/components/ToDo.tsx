const ToDo = (props: any) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: props.todo.isItDone ? "line-through" : "" }}
    >
      {props.todo.text}
      <input
        type="checkbox"
        checked={props.todo.isItDone}
        onChange={() => props.handleCheck(props.index)}
      />
    </div>
  );
};

export default ToDo;
