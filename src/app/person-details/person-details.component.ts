import {Component, Input, OnInit} from '@angular/core';
import {Result} from '../result';
import {Person} from '../person';
import {DataService} from '../data.service';
import {ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent   {

  person: Person;
  submitted = false;
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  delete(): void {
    this.dataService.delete(this.person.login);
  }/*
  onSubmit(): void {
    this.submitted = true;
    this.dataService.update(this.person);
  }*/
  /*ngOnInit(): void {
    this.route.params.pipe(
      switchMap(
        (params: Params) =>
          this.dataService.getPerson(+params['pesel'])
    )).subscribe(person => this.person = person);
  }*/

  goBack(): void {
    this.location.back();
  }


}
