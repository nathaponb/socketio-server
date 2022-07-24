import * as S from "../../styled";
import { IUser } from "../../features/user/userSlice";
import genIdenticon from "../../utils/genIdenticon";

interface Props {
  user: IUser | null;
  isOwner: boolean;
}

function User({ user, isOwner }: Props): JSX.Element {
  const iden = genIdenticon(user?.identicon?.hash, user?.identicon?.rgba);

  return (
    <S.User isOwner={isOwner}>
      <div>
        <figure>
          <img src={`data:image/png;base64, ${iden}`} alt="Identicon" />
        </figure>
      </div>

      <article>
        <h1>{user?.username}</h1>
        <h4>{user?.role}</h4>
        {isOwner ? <p>ID: {user?.clientID}</p> : null}
      </article>

      {!isOwner ? (
        <section>
          <small></small>
        </section>
      ) : null}
    </S.User>
  );
}

export default User;
