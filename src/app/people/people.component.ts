import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Person} from '../person';
import {Router} from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {


  people: Person[];
  constructor(private router: Router, private dataService: DataService) { }

  getPeople() {
    return this.dataService.getPeople().subscribe( data => {
      this.people = data;
    });
  }
  ngOnInit(): void {
    this.getPeople();
  }
  delete(person: Person): void {
    this.dataService.delete(person.login)
      .subscribe( data => {
        this.people = this.people.filter(u => u !== person);
      });
  }
}
