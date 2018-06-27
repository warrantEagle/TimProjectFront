import { Component, OnInit } from '@angular/core';
import {ChartItem} from '../chartItem';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {DataService} from '../data.service';
import {Result} from '../result';
import {s} from '@angular/core/src/render3';
import {Location} from '@angular/common';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})

export class ChartsComponent implements OnInit {


  width = 600;
  height = 400;
  type = 'column2d';
  dataFormat = 'json';
  dataSource;
  dataSource2;
  dataSource3;
  results: Result[];
  constructor(private route: ActivatedRoute, private dataService: DataService,
              private location: Location) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(
        (params: Params) =>
          this.dataService.getResultsByPersonLogin(params['personLogin'])
      )).subscribe(result => {
      this.results = result;
      const item = new Array();
      for (let i = 0; i < this.results.length; i++) {
        const p = new ChartItem(new Date(this.results[i].date).toString(), this.results[i].kcal.toString());
        item.push(p);
      }
      const item2 = new Array();
      for (let i = 0; i < this.results.length; i++) {
        const p = new ChartItem(new Date(this.results[i].date).toString(), this.results[i].dist.toString());
        item2.push(p);
      }
      const item3 = new Array();
      for (let i = 0; i < this.results.length; i++) {
        const p = new ChartItem(new Date(this.results[i].date).toString(), this.results[i].time.toString());
        item3.push(p);
      }
      this.dataSource = {
        'chart': {
          'caption': 'Kcal',
          'subCaption': 'Statistics on calories burned',
          'numberprefix': 'kcal ',
          'theme': 'fint'
        },
        'data': item
      };
      this.dataSource2 = {
        'chart': {
          'caption': 'Length',
          'subCaption': 'Statistics on the distance traveled',
          'numberprefix': 'km ',
          'theme': 'fint'
        },
        'data': item2
      };
      this.dataSource3 = {
        'chart': {
          'caption': 'Time',
          'subCaption': 'Statistics on training time',
          'numberprefix': 'Hour ',
          'theme': 'fint'
        },
        'data': item3
      };
    });

  }
  goBack(): void {
    this.location.back();
  }
}
