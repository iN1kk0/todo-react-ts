import classnames from "classnames";

interface IProps {
  todo: {
    id: number;
    text: string;
    isItDone: boolean;
  };
  index: number;
  handleCheck: (todo: any) => void;
  handleDelete: (id: number) => void;
}

const ToDo = (props: IProps) => {
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
        onChange={() =>
          props.handleCheck({ ...props.todo, isItDone: !props.todo.isItDone })
        }
        className="ml-2"
      />
      <button
        className="mx-2 text-xs text-red-500"
        onClick={() => props.handleDelete(props.todo.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default ToDo;
