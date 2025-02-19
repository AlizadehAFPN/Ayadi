import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VideoState } from '../types';

const initialState: VideoState = {
  url: null,
  lastPosition: 0,
  paused:false,
};

const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    setUrl(state, action: PayloadAction<string | null>) {
      state.url = action.payload;
    },
    setLastPosition(state, action: PayloadAction<number>) {
      state.lastPosition = action.payload;
    },
    setPaused: (state, action: PayloadAction<boolean>) => { // <-- Add this
      state.paused = action.payload;
    },
  },
});

export const { setUrl, setLastPosition, setPaused } = videoSlice.actions;
export default videoSlice.reducer;

