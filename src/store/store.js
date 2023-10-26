// store.js
import { configureStore } from '@reduxjs/toolkit';
import sidebarOpenReducer from './sidebarOpenSlice';

const store = configureStore({
  reducer: {
    sidebarOpen: sidebarOpenReducer,
  },
});

export default store;
