import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';

export type TaskId = string;

export interface Task {
  title: string;
  done: boolean;
  id: TaskId;
}

export type ActiveFilter = 'all' | 'done';

interface Tasks {
  taskList: Array<Task>;
  activeFilter: ActiveFilter;
  searchFieldValue: string;
}

export const initialState: Tasks = {
  taskList: [],
  activeFilter: 'all',
  searchFieldValue: '',
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, { payload }: PayloadAction<Task>) => {
      const newTask = {
        title: payload.title,
        done: payload.done,
        id: payload.id,
      };
      state.taskList = [...state.taskList, newTask];
    },
    deleteTask: (state, { payload }: PayloadAction<TaskId>) => {
      state.taskList = state.taskList.filter((item) => item.id !== payload);
    },
    toggleTaskStatus: (state, { payload }: PayloadAction<TaskId>) => {
      const updatedArray = state.taskList.map((task) => {
        if (task.id === payload) {
          return { ...task, done: !task.done };
        }
        return task;
      });

      state.taskList = updatedArray;
    },
    setFilter: (state, { payload }: PayloadAction<ActiveFilter>) => {
      state.activeFilter = payload;
    },
    setSearchValue: (state, { payload }: PayloadAction<string>) => {
      state.searchFieldValue = payload;
    },
  },
});

const selectTasks = (state: RootState) => state.tasks;

export const getTasks = createSelector(selectTasks, (tasks) => {
  if (tasks.activeFilter === 'done') {
    return tasks.taskList.filter(
      (item) => item.title.includes(tasks.searchFieldValue) && item.done,
    );
  } else {
    return tasks.taskList.filter((item) =>
      item.title.includes(tasks.searchFieldValue),
    );
  }
});

export const {
  addTask,
  deleteTask,
  toggleTaskStatus,
  setFilter,
  setSearchValue,
} = tasksSlice.actions;

export default tasksSlice.reducer;

