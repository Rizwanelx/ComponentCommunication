import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent2',
  template: ' Message: {{message}} <app-child2 (messageEvent)="receiveMessage($event)"></app-child2> ',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit {

  constructor() { }


  message: string;

  receiveMessage($event) {
    this.message = $event;
  }

  ngOnInit() {
  }

}
