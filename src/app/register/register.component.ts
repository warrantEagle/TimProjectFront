import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {Person} from '../person';
import {Router} from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  person: Person = new Person();
  submitted = false;
  constructor(private router: Router, private dataService: DataService,
              private location: Location) { }

  create(): void {
    this.dataService.create(this.person)
      .subscribe( data => {
        alert('Account created  successfully.');
        this.router.navigate(['/home/' + this.person.login]);

      });

  }

  goBack(): void {
    this.location.back();
  }

}
