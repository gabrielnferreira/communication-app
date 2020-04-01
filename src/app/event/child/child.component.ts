import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  @Input() value: number;
  @Output() plusOne = new EventEmitter<any>();
  @Output() plusTwo = new EventEmitter<any>();
  @Output() minusOne = new EventEmitter<any>();
  @Output() minusTwo = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

  plusOneClick() {
    this.plusOne.emit();
  }

  plusTwoClick() {
    this.plusTwo.emit();
  }

  minusOneClick() {
    this.minusOne.emit();
  }

  minusTwoClick() {
    this.minusTwo.emit();
  }

}
