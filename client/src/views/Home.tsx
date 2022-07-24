import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import * as S from "../styled";
import Sidebar from "../components/Sidebar";
import SidebarSM from "../components/SidebarSM";
import Chat from "../components/Chat";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { added, joined, leaved } from "../features/people/peopleSlice";
import { inserted, IMessage } from "../features/message/messageSlice";
import { IUser } from "../features/user/userSlice";

interface IUsers {
  timeStamp: Date;
  sid: string;
  people: IUser;
}

function Home() {
  console.log("Re-rendering HOME");
  const dispatch = useDispatch();
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<Array<IMessage>>([]);

  const user = useSelector((state: RootState) => state.user);
  // const messages = useSelector((state: RootState) => state.message);

  useEffect(() => {
    /**
     * * SENDING INITIAL HANDSHAKE DATA TO THE SERVER
     */
    const newSocket: Socket = io(
      "https://glacial-savannah-45468.herokuapp.com",
      {
        query: {
          clientID: user.data?.clientID,
          username: user.data?.username,
          role: user.data?.role,
          identiconHash: user.data?.identicon?.hash, // extract obj and passing as a plain string
          identiconRgba: user.data?.identicon?.rgba, // due to nested obj couldn't be passed to query string
        },
      }
    );

    setSocket(newSocket);

    newSocket.on("connection", (data: IMessage) => {
      console.log("on connection", data.senderData);
      dispatch(inserted(data)); // push 'notify' message to active users
      dispatch(joined(data.senderData!)); // add new user to the people list
    });

    newSocket.on("users", (data: IUsers) => {
      // recieve all the users data, delete reciever out
      delete data.people[data.sid as keyof IUser];
      dispatch(added(Object.values(data.people))); // add previous users to the list of active
    });

    newSocket.on("disconnection", (data: IMessage) => {
      dispatch(inserted(data));

      const id = data.senderData?.clientID;

      dispatch(leaved(id!));
    });

    // LISTEN ON GLOBAL ROOM
    newSocket.on("global", (data: IMessage) => {
      dispatch(inserted(data));
      // setMessages((pre) => [...pre, data]);
    });

    return () => {
      newSocket.close();
    };
  }, [setSocket]);

  return (
    <S.App>
      <Sidebar />
      <SidebarSM />
      <Chat socket={socket!} />
    </S.App>
  );
}

export default Home;
