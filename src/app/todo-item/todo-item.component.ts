import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.component.html',
  styles: `
  .green {
    color: green;
    font-weight: bold;
  }
  .red {
    color: red;
    font-weight: bold;
  }
    `
})
export class TodoItemComponent {
  title = 'Todo Item';
  date = '01-01-2025';
  completed = false;
  @Input() todoItem: any;

  completeTodo(todoItem: any, completed: boolean) {
    todoItem.completed = completed;
  }
}
