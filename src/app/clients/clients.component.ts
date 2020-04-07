import { Component, OnInit } from '@angular/core';
import { Client } from './client.module';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  name: string;
  age: number;
  clients: Client[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.clients.push(
      {
        name:this.name,
        age: this.age
      }
    );
    this.name = "";
    this.age = 0;
  }

  updateClient(c: Client, i) {
    this.clients[i].name = c.name;
    this.clients[i].age = c.age;
    console.log("Atualizado! " + c.name + c.age);
  }

  removeClient(i) {
    this.clients.splice(i, 1);
  }

}
