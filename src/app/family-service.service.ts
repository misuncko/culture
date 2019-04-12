import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from './person.model';

@Injectable({
  providedIn: 'root'
})
export class FamilyServiceService {
  url = "http://localhost:4222/family";

  constructor(private http: HttpClient) { }

  getFamily(): Observable<Person[]> {
    return this.http.get<Person[]>(this.url);
  }
}
