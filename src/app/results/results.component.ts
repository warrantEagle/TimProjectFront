import { Component, OnInit } from '@angular/core';
import {Result} from '../result';
import {DataService} from '../data.service';
import {Router} from '@angular/router';
import {Person} from '../person';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  zoom = 13;
  lat = 52.249676;
  lng = 20.882229;
  results: Result[];
  constructor(private router: Router, private dataService: DataService) { }

  getResultsByPersonLogin(result: Result) {
    return this.dataService.getResultsByPersonLogin(result).subscribe( data => {
      this.results = data;
    });
  }

  ngOnInit() {
    //this.getResultsByPersonLogin(result: Result);
  }

  delete(result: Result): void {
    this.dataService.deleteResult(result)
      .subscribe( data => {
        this.results = this.results.filter(u => u !== result);
      });
  }
}
