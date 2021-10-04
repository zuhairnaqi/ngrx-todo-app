import {createFeatureSelector, createSelector} from '@ngrx/store';
import { AppState } from './app.reducer';


export const selectFeature = createFeatureSelector<AppState>('app');

export const selectTodos = createSelector(
  selectFeature,
  (state) => state.todoTasks,
)