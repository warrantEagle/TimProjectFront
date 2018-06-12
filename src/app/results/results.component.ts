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

  results: Result[];
  constructor(private router: Router, private dataService: DataService) { }

  getResults() {
    return this.dataService.getResults().subscribe( data => {
      this.results = data;
    });
  }

  ngOnInit() {
    this.getResults();
  }

  delete(result: Result): void {
    this.dataService.deleteResult(result)
      .subscribe( data => {
        this.results = this.results.filter(u => u !== result);
      });
  }
}
