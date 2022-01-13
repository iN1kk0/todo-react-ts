import { useEffect, useState } from "react";
import "./App.css";
import ToDoForm from "./components/ToDoForm";
import ToDo from "./components/ToDo";
import axios from "axios";

function App() {
  const [todos, addTodos] = useState<
    { id: number; text: any; isItDone: any }[]
  >([]);

  // https://github.com/podgorniy/todo-server

  const getTasks = async () => {
    const result = await axios.get("http://localhost:5000/todos");
    console.log(result.data);
    const newTodo = result.data.map((task: any) => {
      return { id: task.id, text: task.description, isItDone: task.done };
    });

    addTodos(newTodo);
  };

  const addTask = async (text: string) => {
    await axios
      .post("http://localhost:5000/todos", {
        todo: {
          id: new Date().getTime(),
          description: text,
          done: false,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateTask = async (todo: any) => {
    await axios.put("http://localhost:5000/todos/" + todo.id, {
      todo: {
        id: todo.id,
        done: todo.isItDone,
        description: todo.text,
      },
    });
  };

  useEffect(() => {
    getTasks();
  }, []);

  const handleCheck = async (todo: object) => {
    console.log(todo);
    /*const newTodos = [...todos];
    if (newTodos[index].isItDone) {
      newTodos[index].isItDone = false;
    } else {
      newTodos[index].isItDone = true;
    }
    addTodos(newTodos);*/
    await updateTask(todo);
    await getTasks();
  };

  const handleSubmit = async (value: { text: string }) => {
    /*const newTodo = [...todos, { text: value.text, isItDone: false }];
    addTodos(newTodo);*/
    await addTask(value.text);
    await getTasks();
  };

  return (
    <div className="App">
      <div className="todos">
        {todos.map((todo, index) => (
          <ToDo
            key={index}
            index={index}
            todo={todo}
            handleCheck={handleCheck}
          />
        ))}
      </div>
      <ToDoForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
