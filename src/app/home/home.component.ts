import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  login: string;
  constructor(private location: Location, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.login = params['personLogin'];
    });
  }
}
