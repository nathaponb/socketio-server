import * as S from "../styled";
import { User } from "./_sidebars";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

function Sidebar(): JSX.Element {
  const user = useSelector((state: RootState) => state.user);
  const people = useSelector((state: RootState) => state.people.people);

  return (
    <S.Sidebar>
      <S.SidebarCtn>
        <User user={user.data} isOwner={true} />

        {/* list of people */}
        {people.length ? (
          people.map((person) => (
            <div key={person.clientID}>
              <User user={person} isOwner={false} />
            </div>
          ))
        ) : (
          <S.NoActiveUserPlaceholder>
            <p>No one here</p>
          </S.NoActiveUserPlaceholder>
        )}
      </S.SidebarCtn>
    </S.Sidebar>
  );
}

export default Sidebar;
