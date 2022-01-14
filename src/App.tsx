import "./App.css";
import ToDoForm from "./components/ToDoForm";
import ToDo from "./components/ToDo";
import axios, { AxiosResponse } from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";
export interface ITask {
  id: number;
  description: string;
  done: boolean;
}

function App() {
  const queryData = useQuery("todos", async () => {
    return await axios.get<ITask[]>("http://localhost:5000/todos");
  });
  const client = useQueryClient();

  const postData = useMutation<AxiosResponse<ITask>, any, Partial<ITask>>(
    async (values) => {
      console.log(values.description);
      return await axios.post("http://localhost:5000/todos", {
        todo: {
          id: new Date().getTime(),
          description: values.description,
          done: false,
        },
      });
    }
  );

  console.log(
    "isLoading:",
    queryData.isLoading,
    "Mutation:",
    postData.isLoading
  );

  const updateData = useMutation(async (todo: any) => {
    await axios.put("http://localhost:5000/todos/" + todo.id, {
      todo: {
        id: todo.id,
        done: todo.isItDone,
        description: todo.description,
      },
    });
  });

  const deleteData = useMutation(async (id: number) => {
    await axios.delete("http://localhost:5000/todos/delete/" + id);
  });

  const handleDelete = async (id: number) => {
    await deleteData.mutateAsync(id);
    client.invalidateQueries(["todos"]);
  };

  const handleCheck = async (todo: object) => {
    await updateData.mutateAsync(todo);
    client.invalidateQueries(["todos"]);
  };

  const handleSubmit = async (value: Partial<ITask>) => {
    await postData.mutateAsync(value);
    client.invalidateQueries(["todos"]);
  };

  return (
    <div className="App">
      <header className="bg-slate-500 mb-8">
        <h1 className="text-xl text-white py-4 font-semibold">TODO APP</h1>
      </header>
      {queryData.isLoading ||
      postData.isLoading ||
      updateData.isLoading ||
      deleteData.isLoading ? (
        <div className="text-green-700 my-4">Loading...</div>
      ) : (
        <div className="todos-section">
          <div className="todos">
            {queryData?.data?.data.map((todo, index) => (
              <ToDo
                key={index}
                index={index}
                todo={todo}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
              />
            ))}
          </div>
          <ToDoForm handleSubmit={handleSubmit} />
        </div>
      )}
    </div>
  );
}

export default App;
