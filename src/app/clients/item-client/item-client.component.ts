import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from '../client.module';

@Component({
  selector: 'app-item-client',
  templateUrl: './item-client.component.html',
  styleUrls: ['./item-client.component.css']
})
export class ItemClientComponent implements OnInit {


  @Input() client: Client;
  @Output() updateClient = new EventEmitter;
  @Output() removeClient = new EventEmitter;

  name: string;

  age: number;

  onEdit: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.name = this.client.name;
    this.age = this.client.age;
  }


  edit() {
    this.onEdit = true;
  }

  remove() {
    this.removeClient.emit();

  }

  save() {
    this.client.name = this.name;
    this.client.age = this.age;
    this.onEdit = false;
    this.updateClient.emit({
      name: this.name, age: this.age
    })
  }
}
