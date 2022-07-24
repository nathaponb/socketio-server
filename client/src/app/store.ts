import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import peopleReducer from "../features/people/peopleSlice";
import mechanicReducer from "../features/mechanic/mechanicSlice";
import messageReducer from "../features/message/messageSlice";

const store = configureStore({
  reducer: {
    messages: messageReducer,
    user: userReducer,
    people: peopleReducer,
    mechanic: mechanicReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
