import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todoReducers } from "./reducers/reducer";
export const rootReducer = combineReducers({
  todoReducers,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
