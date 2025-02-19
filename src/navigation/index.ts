import { configureStore } from '@reduxjs/toolkit';
import videoSlice from '../redux/videoSlice';

export const store = configureStore({
  reducer: {
    video: videoSlice,
  },
});
