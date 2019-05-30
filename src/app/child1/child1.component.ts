import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  template: ' ',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  message = 'Hello Rizwan I am from Child Component!';

  constructor() { }

  ngOnInit() {
  }

}
