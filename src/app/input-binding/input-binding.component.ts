import { Component, OnInit, Input } from '@angular/core';
import { Client } from './client.model';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {
  
  @Input() name: string;
  @Input('lastName') othername: string;
  @Input() age: number;

  clients: Client[];
  
  constructor() {
    this.clients = [
      {id: 1, name: "Gabriel", age: 23},
      {id: 2, name: "ASsafsa", age: 60},
      {id: 3, name: "Faxcxzxc", age: 43},
      {id: 4, name: "Sdsadas", age: 25}
    ]
   }

  ngOnInit(): void {
  }



}
