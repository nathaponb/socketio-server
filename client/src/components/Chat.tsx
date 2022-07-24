import React, { useRef, useEffect } from "react";
import * as S from "../styled";
import { IMessage } from "../features/message/messageSlice";
import Message from "./_chat/Message";
import Notify from "./_chat/Notify";
import { Socket } from "socket.io-client";
import { HeadChat, Input } from "./_chat";
import { closed } from "../features/mechanic/mechanicSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";

interface Props {
  socket: Socket;
}

function Chat({ socket }: Props): JSX.Element {
  const messages = useSelector((state: RootState) => state.messages);

  /**
   * *************************************************************************************
   * * simply scroll chat component to the vary bottom when the new message is broadcasted
   * *************************************************************************************
   */

  const el = useRef<null | HTMLDivElement>(null);

  function scrollToBottom() {
    el.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  /**
   * *************************************************************************************
   * * On mobile screen if user click chat panel then the sidebar should be closed.
   * *************************************************************************************
   */
  const dispatch = useDispatch();
  function handleCloseSidebar() {
    dispatch(closed());
  }

  return (
    <S.Chat>
      <HeadChat />
      <S.ChatArea onClick={handleCloseSidebar}>
        {messages.map((item: IMessage, i: number): JSX.Element => {
          return item.type === "message" ? (
            <Message ref={el} message={item} key={i} />
          ) : (
            <Notify
              ref={el}
              text={item.text!}
              timeStamp={item.timeStamp}
              key={i}
            />
          );
        })}
      </S.ChatArea>
      <Input socket={socket} />
    </S.Chat>
  );
}

export default React.memo(Chat);
