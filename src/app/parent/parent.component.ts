import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: '<app-child [childMessage]="parentMessage"> </app-child>',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parentMessage = 'I am from parent Component';
  constructor() { }

  ngOnInit() {
  }

}
