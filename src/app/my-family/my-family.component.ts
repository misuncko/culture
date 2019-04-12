import { Component, OnInit } from '@angular/core';
import { Person } from '../person.model';

@Component({
  selector: 'app-my-family',
  templateUrl: './my-family.component.html',
  styleUrls: ['./my-family.component.css']
})
export class MyFamilyComponent implements OnInit {

  familyMembers: Person[];

  constructor() { }

  ngOnInit() {
  }

}
