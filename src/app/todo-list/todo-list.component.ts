import { Component } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  imports: [TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styles: `
    p {
      font-size: 20px;
      color: red;
    }
  `
})
export class TodoListComponent {
  title = 'Todo List';
  todos = [
    { title: 'Todo 1', completed: false },
    { title: 'Todo 2', completed: false },
    { title: 'Todo 3', completed: false }
  ];

  addTodo() {
    this.todos.push({ title: 'New Todo', completed: false });
  }

  removeTodo() {
    this.todos.pop();
  }
}
