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

    if ((new String(this.person.login).valueOf()) !== new String('undefined').valueOf()
      && (new String(this.person.password).valueOf()) !== new String('undefined').valueOf()) {
      this.dataService.create(this.person)
        .subscribe(data => {
          alert('Account created  successfully.');
          this.router.navigate(['/home/' + this.person.login]);

        });
    } else {
      alert('Complete field!');
    }

  }

  goBack(): void {
    this.location.back();
  }

}
