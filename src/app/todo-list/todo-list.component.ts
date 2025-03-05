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
    { title: 'Todo 1', date: '01-03-2025', completed: false },
    { title: 'Todo 2', date: '02-03-2025',  completed: false },
    { title: 'Todo 3', date: '03-03-2025',  completed: false }
  ];
  newTodoTitle = '';

  addTodo() {
    if (this.newTodoTitle.trim()) {
      this.todos.push({title: this.newTodoTitle, date: new Date().toLocaleDateString(), completed: false});
      this.newTodoTitle = '';
      console.log(this.newTodoTitle)
    }
  }

  removeTodo() {
    this.todos.pop();
  }

  trackByTitle(index: number, item: any): string {
    return item.title;
  }
}
