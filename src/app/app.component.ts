import {Component, OnInit} from '@angular/core';
import {Result} from './result';
import {DataService} from './data.service';
import {Person} from './person';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  title = 'Training partner app';

}
