import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import {Result} from '../result';

@Component({
  selector: 'app-result-details',
  templateUrl: './result-details.component.html',
  styleUrls: ['./result-details.component.css']
})
export class ResultDetailsComponent implements OnInit {

  result: Result;

  constructor( private dataService: DataService,
               private route: ActivatedRoute,
               private location: Location) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap(
        (params: Params) =>
          this.dataService.getResultByResultId(+params['idResult'])
      )).subscribe(result => this.result = result);
  }
  goBack(): void {
    this.location.back();
  }
}
