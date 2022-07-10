import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todo";

// 3- Todoのpropsに型を指定する
type TodoType = {
  userId: number;
  title: string;
  completed: boolean;
};

export default function App() {
  // 2- <any> = useStateの型
  // 3- <Array<TodoType>> = useStateの型
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    // 3- <Array<TodoType>> = axiosにArrayというデータの型と、
    // - 上記のTodoTypeの型を指定する
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };
  return (
    <div className="App">
      <button onClick={onClickFetchData}>Get data</button>
      {todos.map((todo) => (
        // 2- 型を指定してあげないと取得した
        // - userid が undefinedになってしまう
        // 3- "userid" -> "userId"
        <Todo
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
