import { Action, createReducer, on } from "@ngrx/store";
import { TodoTask } from "../interfaces/task.interface";
import { addTask, deleteTask } from "./app.actions";

export interface AppState {
  todoTasks: TodoTask[];
}

const initialState: AppState = {
  todoTasks: [],
};

const reducer = createReducer(
  initialState,
  on(addTask, (state, task: TodoTask) => ({
    ...state,
    todoTasks: [...state.todoTasks, task],
  })),
  // on(deleteTask, (state) => ({
  //   ...state,
  //   todoTasks: [...state.todoTasks],
  // })),
);

export function appReducer(state: AppState = initialState, action: Action) {
  console.log({state, action})
  return reducer(state, action);
}

