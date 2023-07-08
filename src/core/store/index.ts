import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './tasksSlice';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export type Store = typeof store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export { store };

