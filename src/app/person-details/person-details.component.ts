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
export class PersonDetailsComponent  implements OnInit  {

  person: Person;
  submitted = false;
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {

    this.route.params.pipe(
      switchMap(
        (params: Params) =>
          this.dataService.getPerson(params['personLogin'])
    )).subscribe(person => this.person = person);
  }

  goBack(): void {
    this.location.back();
  }


}
