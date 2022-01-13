import classnames from "classnames";

interface IProps {
  todo: {
    id: number;
    text: string;
    isItDone: boolean;
  };
  index: number;
  handleCheck: (todo: any) => void;
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
    </div>
  );
};

export default ToDo;
