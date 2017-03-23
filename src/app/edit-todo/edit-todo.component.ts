import { Component, OnInit } from '@angular/core';
import { TodoService } from "../shared/todo.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {

  constructor(private todoService: TodoService, private route: ActivatedRoute) { }

  todo; // property declaration, public by default

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.todo = this.todoService.getTodos()[+params['index']];
    });
  }

  isFieldValid(fieldName) {
    return fieldName.invalid && fieldName.touched;
  }

}
