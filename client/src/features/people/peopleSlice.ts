import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../user/userSlice";

// interface People extends IUser {
//   isActive: boolean,
//   timeStamp: Date
// }
interface IPeopleState {
  people: Array<IUser>;
}

const initialState: IPeopleState = {
  people: [],
};

const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    added: (state: IPeopleState, action: PayloadAction<IUser[]>) => {
      state.people = action.payload;
    },
    joined: (state: IPeopleState, action: PayloadAction<IUser>) => {
      state.people.push(action.payload);
    },
    leaved: (state: IPeopleState, action: PayloadAction<string>) => {
      // filter out a leaved user
      let index: number = state.people
        .map((item: IUser) => item.clientID)
        .indexOf(action.payload);
      state.people.splice(index, 1);
    },
  },
});

export default peopleSlice.reducer;
export const { added, joined, leaved } = peopleSlice.actions;
