// 5- delete TodoType & import it from ./types/todo instead
import { VFC } from "react";
import { TodoType } from "./types/todo";

// 4- (props: TodoType) = propsにTodoTypeの型を指定する
// 5- Omit<TodoType, "id">だと
// -TodoTypeの中で"id"だけが要らない
export const Todo: VFC<Omit<TodoType, "id">> = (
  // 5-"TodoType": コンポネント化された型から抽出する
  // -"userId"など:これだけ必要だという型の要素
  // Pick<TodoType, "userId" | "title" | "completed">
  props
) => {
  // 4- "false"= completedの初期値
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(User:${userId})`}</p>;
};
