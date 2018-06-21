import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Location} from '@angular/common';
import {Person} from '../person';
import {Router} from '@angular/router';
import {Result} from '../result';
import {Point} from '../point';
import {ArrayType} from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-create-result',
  templateUrl: './create-result.component.html',
  styleUrls: ['./create-result.component.css']
})
export class CreateResultComponent  {
  constructor(private router: Router, private dataService: DataService,
              private location: Location) { }
   p1: Point = new Point(20.882229, 52.249676, 1);
   p2: Point = new Point(20.782229, 52.269676, 2);
   p3: Point = new Point(20.982229, 52.349676, 3);
  point: Point[];

  result: Result = new Result();
  submitted = false;


  create(): void {
    this.point = [this.p1, this.p2, this.p3];
    this.dataService.createResult(this.result)
      .subscribe( data => {
        alert('Result created successfully!');
      });
    this.dataService.createPoints(this.point)
      .subscribe( data => {
        alert('Points created successfully!');
      });
  }


  goBack(): void {
    this.location.back();
  }

}
