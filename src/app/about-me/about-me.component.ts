import { Component, OnInit } from '@angular/core';
import { Person } from '../person.model';
import { FamilyServiceService } from '../family-service.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  persons: Person[];
  constructor(private familyService: FamilyServiceService) { }

  ngOnInit() {
    this.getMyFamily();
    console.log(this.persons);
  }


  getMyFamily() {
    this.familyService.getFamily()
      .subscribe(
        (data: Person[]) => this.persons = data,
        error => console.log("Error: ", error)
      );
  }
}
