import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Location} from '@angular/common';
import {Person} from '../person';
import {Router} from '@angular/router';
import {Result} from '../result';

@Component({
  selector: 'app-create-result',
  templateUrl: './create-result.component.html',
  styleUrls: ['./create-result.component.css']
})
export class CreateResultComponent  {

  result: Result = new Result();
  submitted = false;
  constructor(private router: Router, private dataService: DataService,
              private location: Location) { }

  create(): void {
    this.dataService.createResult(this.result)
      .subscribe( data => {
        alert('Result created successfully.');
      });

  }

  goBack(): void {
    this.location.back();
  }

}
