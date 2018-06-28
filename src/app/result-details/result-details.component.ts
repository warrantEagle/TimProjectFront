import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import {Result} from '../result';
import {Point} from '../point';

@Component({
  selector: 'app-result-details',
  templateUrl: './result-details.component.html',
  styleUrls: ['./result-details.component.css']
})
export class ResultDetailsComponent implements OnInit {
  zoom = 13;
  lat = 52.249676;
  lng = 20.882229;
   time: any;
  result: Result;
  points: Point[];
  constructor( private dataService: DataService,
               private route: ActivatedRoute,
               private location: Location) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap(
        (params: Params) =>
          this.dataService.getResultByResultId(+params['idResult'])
      )).subscribe(result =>  this.result = result );

    this.route.params.pipe(
      switchMap(
        (params: Params) =>
          this.dataService.getPointsByResultId(+params['idResult'])
      )).subscribe(result => this.points = result);

  }
  goBack(): void {
    this.location.back();
  }
  convert(resultDate) {
    const date = new Date(resultDate);
    this.time = date.toString();
    return this.time;
  }

}
