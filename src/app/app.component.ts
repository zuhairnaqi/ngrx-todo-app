import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TodoTask } from './interfaces/task.interface';
import { addTask } from './store/app.actions';
import { selectTodos } from './store/app.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  taskText = '';
  todoItems$: Observable<TodoTask[]>
  constructor(private store: Store) {
    this.todoItems$ = this.store.select(selectTodos)
  }


  addTask() {
    console.log('taskText');
    this.store.dispatch(addTask({
      id: Math.ceil(Math.random() * 1000),
      title: this.taskText
    }))
    this.taskText = '';
  }
}
