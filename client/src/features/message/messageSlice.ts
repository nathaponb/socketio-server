import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { IUser } from "../user/userSlice";
import { RootState } from "../../app/store";

type MessageType = "message" | "notify";

export interface IMessage {
  type: MessageType;
  text: string;
  isOwner: boolean;
  senderID: string; // in case of ordinary message
  senderData?: IUser; // for active users get new joined user data
  people?: Array<IUser>; // for new joined user to get active users data
  timeStamp: Date;
}

const initialState: IMessage[] = [];

const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    inserted: (state: IMessage[], action: PayloadAction<IMessage>) => {
      // let currentState = current(state);
      // let lastOne = currentState[currentState.length - 1];
      // if (!state.length) {
      //   state.push({ ...action.payload.data, isLastMsgMine: true });
      // } else if (lastOne.clientID === action.payload.userID) {
      //   /**
      //    * * Check if previous message is belong to current user { arr[lastIndex].id === user.id }
      //    * * it's used for styling Message UI/
      //    */
      //   console.log("HERE", lastOne);
      //   console.log("HERE1", action.payload.userID);
      //   state.push({ ...action.payload.data, isLastMsgMine: true });
      // } else {
      //   state.push({ ...action.payload.data, isLastMsgMine: false });
      // }
      state.push(action.payload);
    },
  },
});

export const selectMessages = createSelector(
  (state: RootState) => state.messages, // call initially
  (messages) =>
    new Date(messages[messages.length - 1].timeStamp).getDate() >=
    new Date().getDate()
      ? messages[messages.length - 1]
      : null
);

export default messageSlice.reducer;
export const { inserted } = messageSlice.actions;
