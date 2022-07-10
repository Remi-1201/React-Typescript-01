// 5- delete TodoType & import it from ./types/todo instead
import { TodoType } from "./types/todo";

// 4- (props: TodoType) = propsにTodoTypeの型を指定する
export const Todo = (
  // 5-"TodoType": コンポネント化された型から抽出する
  // -"userId"など:これだけ必要だという型の要素
  props: Pick<TodoType, "userId" | "title" | "completed">
  // 5- Omit<TodoType, "id">だと
  // -TodoTypeの中で"id"だけが要らない
) => {
  // 4- "false"= completedの初期値
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(User:${userId})`}</p>;
};
