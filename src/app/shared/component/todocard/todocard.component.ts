import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../model/todo';
import { todoArr } from '../../const/todo';


@Component({
  selector: 'app-todocard',
  templateUrl: './todocard.component.html',
  styleUrls: ['./todocard.component.scss']
})
export class TodocardComponent implements OnInit {
  tododata:Array<Itodo> = todoArr;
  constructor() { }

  ngOnInit(): void {
    this.tododata = todoArr
  }

}
