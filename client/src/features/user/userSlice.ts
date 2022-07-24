import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 'Identicon' is github pixel style user icon
export interface IIdenticon {
  hash: string;
  rgba: [number, number, number, number]; // fixed length tuple
}

export interface IUser {
  clientID: string | null;
  username: string | null;
  role: string | null;
  identicon: IIdenticon | null;
  token: string | null | undefined;
}

export interface IUserState {
  data: IUser | null;
  loading: boolean;
  error: string | null;
}

const initialState: IUserState = {
  data: null,
  loading: false,
  error: null,
};

// Async thunk for interacts with external data API
const AttemptRegisterUser = createAsyncThunk(
  "user/register",
  async (user: IUser) => {
    const response = await axios.post("/register", user);
    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(AttemptRegisterUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(AttemptRegisterUser.rejected, (state, action) => {
      state.error = "Unable to register user";
      state.loading = false;
    });
    builder.addCase(AttemptRegisterUser.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
  },
});

export default userSlice.reducer;
export { AttemptRegisterUser };
