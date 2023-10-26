import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: true, // Initial state is set to false
};

const sidebarOpenSlice = createSlice({
  name: 'sidebarOpen',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleSidebar } = sidebarOpenSlice.actions;
export default sidebarOpenSlice.reducer;
