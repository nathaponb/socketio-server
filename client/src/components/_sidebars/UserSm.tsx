import * as S from "../../styled";
import { IUser } from "../../features/user/userSlice";
import genIdenticon from "../../utils/genIdenticon";

interface Props {
  user: IUser | null;
  isOwner: boolean;
}

function UserSm({ user, isOwner }: Props): JSX.Element {
  const iden = genIdenticon(user?.identicon?.hash, user?.identicon?.rgba);

  return (
    <S.UserSm isOwner={isOwner}>
      <div>
        <figure>
          <img src={`data:image/png;base64, ${iden}`} alt="Identicon" />
        </figure>
      </div>

      <article>
        <div>
          <h1>{user?.username}</h1>
          <h4>{user?.role}</h4>
          {isOwner ? <p>ID: {user?.clientID}</p> : null}
        </div>
      </article>

      {!isOwner ? (
        <section>
          <small></small>
        </section>
      ) : null}
    </S.UserSm>
  );
}

export default UserSm;
