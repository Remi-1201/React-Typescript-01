type TodoType = {
  userId: number;
  title: string;
  // 4- "?" = この型が必修ではない場合
  completed?: boolean;
};

// 4- (props: TodoType) = propsにTodoTypeの型を指定する
export const Todo = (props: TodoType) => {
  // 4- "false"= completedの初期値
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(User:${userId})`}</p>;
};
