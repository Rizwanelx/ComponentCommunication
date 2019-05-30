import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template:
   'Hello {{childMessage}}',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() childMessage: string;
  constructor() { }

  ngOnInit() {
  }

}
