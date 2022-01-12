import React, { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";
import ToDoForm from "./components/ToDoForm";
import ToDo from "./components/ToDo";

function App() {
  const [todos, addTodos] = useState([
    {
      text: "Learn about React",
      isItDone: false,
    },
    {
      text: "Learn about Typescript",
      isItDone: false,
    },
    {
      text: "Drink coffee",
      isItDone: true,
    },
  ]);

  const handleCheck = (index: number) => {
    const newTodos = [...todos];
    if (newTodos[index].isItDone) {
      newTodos[index].isItDone = false;
    } else {
      newTodos[index].isItDone = true;
    }
    addTodos(newTodos);
  };

  const handleSubmit = (value: { text: string }) => {
    const newTodo = [...todos, { text: value.text, isItDone: false }];
    addTodos(newTodo);
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
