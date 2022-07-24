import React, { useState } from "react";
import { Socket } from "socket.io-client";
import * as S from "../../styled";
import SendIcon from "../../assets/png/paper-plane.png";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { BsImage } from "react-icons/bs";
import { AiFillAudio } from "react-icons/ai";
import ReactTooltip from "react-tooltip";

interface Props {
  socket: Socket;
}

function Input({ socket }: Props): JSX.Element {
  const [inputMessage, setInputMessage] = useState<string | undefined>("");

  const user = useSelector((state: RootState) => state.user);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputMessage === "") {
      return;
    } else {
      socket.emit("global", {
        message: inputMessage,
        senderID: user.data?.clientID,
        sender: user.data,
      });
      setInputMessage("");
    }
  };

  return (
    <S.Input>
      <form onSubmit={handleSubmit}>
        <div>
          <button data-tip="This feature is not yet implemented">
            <ReactTooltip place="top" type="dark" effect="float" />
            <figure>
              <BsImage color="#757575" />
            </figure>
          </button>
          <button data-tip="This feature is not yet implemented">
            <ReactTooltip place="top" type="dark" effect="float" />
            <figure>
              <AiFillAudio color="#757575" />
            </figure>
          </button>
          <input
            type="text"
            value={inputMessage}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputMessage(e.target.value)
            }
            placeholder="Type something"
          />
        </div>
        <div>
          <button type="submit">
            <figure>
              <img src={SendIcon} />
            </figure>
          </button>
        </div>
      </form>
    </S.Input>
  );
}

export default Input;
