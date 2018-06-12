import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Person} from '../person';
import { Location } from '@angular/common';
import {Router} from '@angular/router';
@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent {
  person: Person = new Person();
  submitted = false;
  constructor(private router: Router, private dataService: DataService,
              private location: Location) { }

  create(): void {
    this.dataService.create(this.person)
      .subscribe( data => {
        alert('User created successfully.');
      });

  }

  goBack(): void {
    this.location.back();
  }
}
