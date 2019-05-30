import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  template: '<button (click)="sendMessage()">Send Message</button>',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
message = ' Hello Rizwan I am from child through event emitter and @output';

@Output() messageEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
sendMessage() {
  this.messageEvent.emit(this.message)
}


}
