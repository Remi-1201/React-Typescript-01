// 5- App.tsx & Todo.tsxにおける
// - TodoTypeを一つにまとめる
export type TodoType = {
  id: number;
  userId: number;
  title: string;
  // 4- "?" = この型が必修ではない場合
  completed?: boolean;
};
