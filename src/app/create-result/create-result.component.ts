import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Location} from '@angular/common';
import {Person} from '../person';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Result} from '../result';
import {Point} from '../point';
import {ArrayType} from '@angular/compiler/src/output/output_ast';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-create-result',
  templateUrl: './create-result.component.html',
  styleUrls: ['./create-result.component.css']
})
export class CreateResultComponent implements OnInit {

  login: string;
   p1: Point = new Point(20.882229, 52.249676, 1);
   p2: Point = new Point(20.782229, 52.269676, 2);
   p3: Point = new Point(20.982229, 52.349676, 3);
  point: Point[];
  dataTime: Date;

  result: Result = new Result();
  submitted = false;
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) {this.login = 'a'; }

  create(): void {

    alert('Result created successfully!' + this.login)
    this.point = [this.p1, this.p2, this.p3];
    this.result.date = Date.parse(this.dataTime.toString());
    this.result.loginPerson = this.login;
    this.dataService.createResult(this.result)
      .subscribe( data => {
        alert('Result created successfully!');
      });
    this.dataService.createPoints(this.point)
      .subscribe( data => {
      });
  }


  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.login = params['personLogin'];
    });
  }
}
