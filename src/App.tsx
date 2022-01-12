import React, { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ToDo from "./components/ToDo";

function App() {
  const [value, setValue] = useState("");
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleCheck = (index: number) => {
    const newTodos = [...todos];
    if (newTodos[index].isItDone) {
      newTodos[index].isItDone = false;
    } else {
      newTodos[index].isItDone = true;
    }
    addTodos(newTodos);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value) {
      const newTodo = [...todos, { text: value, isItDone: false }];
      addTodos(newTodo);
    } else {
      alert("Empty value");
    }
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
      <Form handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
