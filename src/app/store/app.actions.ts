import { createAction, props } from '@ngrx/store';
import { TodoTask } from '../interfaces/task.interface';

export const addTask = createAction('[Todo] Add Task', props<TodoTask>())
export const deleteTask = createAction('[Todo] Delete Task')