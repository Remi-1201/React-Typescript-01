// 6- コンポーネント自体の型定義
import { VFC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

// 6- "FC" = 関数コンポネント
// - "VFC" = childrenも含める
export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>This is text!</p>;
};
