import { useState, useEffect } from "react";
import { IMessage } from "../features/message/messageSlice";

/**
 *
 * @param uID string a userID string
 */
const useUser = (messages: IMessage[], uID: string | null): boolean => {
  const [isLastMsgMine, setIsLastMsgMine] = useState<boolean>(false);

  // console.log("Messages", messages);

  const checkIsLastMsgMine = () => {
    if (!messages.length || !uID) {
      setIsLastMsgMine(false);
      return;
    }
    let lMsg = messages[messages.length - 1];
    if (lMsg.senderID === uID) {
      setIsLastMsgMine(true);
    } else {
      setIsLastMsgMine(false);
    }
  };
  // const user
  useEffect(() => {
    checkIsLastMsgMine();
  }, [messages]);

  return isLastMsgMine;
};

export default useUser;
