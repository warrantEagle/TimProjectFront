import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Router} from '@angular/router';
import {LoginData} from '../loginData';
import {Location} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData: LoginData = new LoginData();
  constructor(private router: Router, private dataService: DataService, private location: Location) { }

  check() {
    this.dataService.check(this.loginData)
      .subscribe( data => {
        this.router.navigate(['/people']);
        alert('User created successfully.');
      });
  }
}
