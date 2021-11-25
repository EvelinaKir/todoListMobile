import { createSlice } from "@reduxjs/toolkit";

export type Ttask = {
  task: string;
  id: number;
};

export type TtodoListState = {
  data: [] | Array<Ttask>;
  modal: boolean;
  deleteTask: boolean;
  changeTaskModal: boolean;
  currentTask: Ttask | null;
};

const toDoListState: TtodoListState = {
  data: [],
  modal: false,
  deleteTask: false,
  changeTaskModal: false,
  currentTask: null,
};

export const toDoListSlice = createSlice({
  name: "toDoList",
  initialState: toDoListState,
  reducers: {
    changetoDoList(state, action) {
      state.data = action.payload;
    },
    showModal(state, action) {
      state.modal = action.payload;
    },
    deleteTaskPoint(state, action) {
      state.deleteTask = action.payload;
    },
    changeTaskPoint(state, action) {
      state.changeTaskModal = action.payload;
    },
    writeCurrentTask(state, action) {
      state.currentTask = action.payload;
    },
  },
});

export const todoReducers = toDoListSlice.reducer;
export const todoActions = toDoListSlice.actions;
