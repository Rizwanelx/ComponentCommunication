import { Child1Component } from './../child1/child1.component';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit, AfterViewInit{
@ViewChild (Child1Component) child1;
  constructor() { }
  message: string;

  ngAfterViewInit() {
    this.message = this.child1.message;
    }
  ngOnInit() {
  }



}
