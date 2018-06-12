import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Location} from '@angular/common';
import {Person} from '../person';
import {Router} from '@angular/router';
import {Result} from '../result';
import {Point} from "../point";

@Component({
  selector: 'app-create-result',
  templateUrl: './create-result.component.html',
  styleUrls: ['./create-result.component.css']
})
export class CreateResultComponent  {

  result: Result = {
    loginPerson: '',
   length: 0,
   kcal: 0,
   time: 0,
   date: new Date(),
   map: [[1,2],[1,2]],
  };

   x: number;
     y: number;

  submitted = false;
  constructor(private router: Router, private dataService: DataService,
              private location: Location) { }

  create(): void {
    this.dataService.createResult(this.result)
      .subscribe( data => {
        alert('Result created successfully.');
      });

  }

  addPoint(){
    this.result.map.push([this.x,this.y])
  }
  goBack(): void {
    this.location.back();
  }

}
