import React from "react";
import * as S from "../styled";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { UserSm } from "./_sidebars";

/**************************************************************************/
/*			    NOTE					  */
/* The reason i divided Sidebar into 2 components is because it is easier to maintain Styling
   of styled-components which basically takes props as a part of its conditionally styles.
*/
/**************************************************************************/

function SidebarSM() {
  const isOpen = useSelector((state: RootState) => state.mechanic.sidebar);
  const user = useSelector((state: RootState) => state.user);
  const people = useSelector((state: RootState) => state.people.people);

  return (
    <S.SidebarCtnSM open={isOpen}>
      <S.SidebarWrap>
        <UserSm user={user.data} isOwner={true} />

        {/* list of people */}
        {people.length ? (
          people.map((person) => (
            <div key={person.clientID}>
              <UserSm user={person} isOwner={false} />
            </div>
          ))
        ) : (
          <S.NoActiveUserPlaceholder>
            <p>No one here</p>
          </S.NoActiveUserPlaceholder>
        )}
      </S.SidebarWrap>
    </S.SidebarCtnSM>
  );
}

export default SidebarSM;
