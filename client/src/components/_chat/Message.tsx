import React from "react";
import { IMessage } from "../../features/message/messageSlice";
import * as S from "../../styled";
import { formatAMPM } from "../../utils/formatDateStr";
import genIdenticon from "../../utils/genIdenticon";

interface Props {
  message: IMessage;
}

const Message = (
  { message }: Props,
  ref: React.Ref<HTMLDivElement> | null
): JSX.Element => {
  // console.log("DEBUG: Re-rendering MESSAGE", message);

  function handleGenIdenticon(
    hash: string | undefined,
    rgba: [number, number, number, number] | undefined
  ) {
    return genIdenticon(hash, rgba);
  }

  return (
    <S.Message
      ref={ref}
      owner={message?.isOwner}
      key={message.timeStamp.toString()}
    >
      {!message.isOwner ? (
        <section>
          <small>{message.senderData?.username}</small>
        </section>
      ) : null}
      <div>
        {!message.isOwner ? (
          <figure>
            <img
              src={`data:image/png;base64, ${handleGenIdenticon(
                message.senderData?.identicon?.hash,
                message.senderData?.identicon?.rgba
              )}`}
              alt="Identicon"
            />
          </figure>
        ) : null}
        <article>
          <p>{message.text}</p>
          <small>{formatAMPM(new Date(message.timeStamp))}</small>
        </article>
      </div>
    </S.Message>
  );
};

const forwardEl = React.forwardRef(Message);
export default React.memo(forwardEl);
