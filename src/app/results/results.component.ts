import { Component, OnInit } from '@angular/core';
import {Result} from '../result';
import {DataService} from '../data.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Person} from '../person';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  login: string;
  results: Result[];
  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService) { }

  getResultsByPersonLogin(login: string) {
    return this.dataService.getResultsByPersonLogin(login).subscribe( data => {
      this.results = data;
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.login = params['personLogin'];
    });
    this.getResultsByPersonLogin(this.login);
  }


  delete(result: Result): void {
    this.dataService.deleteResult(result.idResult)
      .subscribe( data => {
        this.results = this.results.filter(u => u !== result);
      });
  }
}
