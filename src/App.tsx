import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todo";

export default function App() {
  // 2- <any> = useStateの型
  const [todos, setTodos] = useState<any>([]);

  const onClickFetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
    });
  };
  return (
    <div className="App">
      <button onClick={onClickFetchData}>Get data</button>
      {todos.map((todo) => (
        // 2- 型を指定してあげないと取得した
        // - userid が undefinedになってしまう
        <Todo title={todo.title} userid={todo.userid} />
      ))}
    </div>
  );
}
