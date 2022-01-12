import classnames from "classnames";

const ToDo = (props: any) => {
  return (
    <div
      className={classnames("todo text-xl my-4", {
        "line-through": !!props.todo.isItDone,
      })}
    >
      {props.todo.text}
      <input
        type="checkbox"
        checked={props.todo.isItDone}
        onChange={() => props.handleCheck(props.index)}
        className="ml-2"
      />
    </div>
  );
};

export default ToDo;
