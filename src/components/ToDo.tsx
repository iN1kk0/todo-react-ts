import classnames from "classnames";

interface IProps {
  todo: {
    id: number;
    description: string;
    done: boolean;
  };
  index: number;
  handleCheck: (todo: any) => void;
  handleDelete: (id: number) => void;
}

const ToDo = (props: IProps) => {
  console.log(props.todo.description);
  return (
    <div
      className={classnames("todo text-xl my-4", {
        "line-through": !!props.todo.done,
      })}
    >
      {props?.todo?.description}

      <input
        type="checkbox"
        checked={props.todo.done}
        onChange={() =>
          props.handleCheck({ ...props.todo, isItDone: !props.todo.done })
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
