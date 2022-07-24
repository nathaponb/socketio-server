import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IMechanic {
  sidebar: boolean;
}

const initialState: IMechanic = {
  sidebar: false,
};

const mechanicSlice = createSlice({
  name: "mechanic",
  initialState,
  reducers: {
    toggled: (state: IMechanic, action: PayloadAction) => {
      state.sidebar = !state.sidebar;
    },
    closed: (state: IMechanic, action: PayloadAction) => {
      state.sidebar = false;
    },
  },
});

export default mechanicSlice.reducer;
export const { toggled, closed } = mechanicSlice.actions;
