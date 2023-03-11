import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import drag from './dragSlice';
import calc from './calcSlice';

export const store = configureStore({
  reducer: {
    drag,
    calc
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
