// 7- "?"=オプショナルチェイニングでnull安全なコードを書く
export type User = {
  name: string;
  // 趣味が複数ある場合、文字列の配列として受け入れる
  hobbies?: Array<string>;
};
