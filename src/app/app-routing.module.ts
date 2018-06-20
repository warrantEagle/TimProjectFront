import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PeopleComponent} from './people/people.component';
import {PersonDetailsComponent} from './person-details/person-details.component';
import {CreatePersonComponent} from './create-person/create-person.component';
import {ResultsComponent} from './results/results.component';
import {CreateResultComponent} from './create-result/create-result.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ResultDetailsComponent} from './result-details/result-details.component';
import {RegisterComponent} from './register/register.component';
import {ChartsComponent} from './charts/charts.component';




const routes: Routes = [
  { path: 'people',  component: PeopleComponent },
  { path: 'results/:personLogin',  component: ResultsComponent },
  { path: 'profDet/:personLogin',  component: PersonDetailsComponent },
  { path: 'add', component: CreatePersonComponent },
  { path: 'addRes', component: CreateResultComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'detail/:idResult', component: ResultDetailsComponent },
  { path: 'home/:personLogin', component: HomeComponent },
  { path: 'charts/:personLogin', component: ChartsComponent },
  { path: '', component: LoginComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
