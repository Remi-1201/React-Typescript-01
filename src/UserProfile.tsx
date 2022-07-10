// 7- "?"=オプショナルチェイニングでnull安全なコードを書く
import { VFC } from "react";
import { User } from "./types/user";

type Props = {
  user: User;
};

export const UserProfile: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>Name</dt>
      <dd>{user.name}</dd>
      <dt>Hobbies</dt>
      {/* 7- hobbiesが存在しない可能性もあるから"?"を付ける */}
      <dd>{user.hobbies?.join(" / ")}</dd>
    </dl>
  );
};
