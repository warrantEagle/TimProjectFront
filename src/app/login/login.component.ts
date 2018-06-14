import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Router} from '@angular/router';
import {LoginData} from '../loginData';
import {Location} from '@angular/common';
import {Person} from '../person';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData: LoginData = new LoginData();
  constructor(private router: Router, private dataService: DataService, private location: Location) { }

  check() : any {
    this.dataService.check(this.loginData)
      .subscribe( data => {/*
        data =*/
        this.router.navigate(['/home']);
        alert('Loged in successfully.' + data.name);
      });
  }
}
