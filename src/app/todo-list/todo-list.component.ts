import { Component, Input } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  imports: [TodoItemComponent, FormsModule],
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
    { title: 'Todo 1', date: '01/03/2025', completed: false }
  ];
  
  @Input() newTodoTitle = '';


  addTodo() {
    if (this.newTodoTitle.trim()) {
      this.todos.push({title: this.newTodoTitle, date: new Date().toLocaleDateString('fr-Fr'), completed: false});
      this.newTodoTitle = '';
    }
  }

  removeTodo() {
    this.todos.pop();
  }
}
