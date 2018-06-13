import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PeopleComponent} from './people/people.component';
import {PersonDetailsComponent} from './person-details/person-details.component';
import {CreatePersonComponent} from './create-person/create-person.component';
import {ResultsComponent} from './results/results.component';
import {CreateResultComponent} from './create-result/create-result.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';




const routes: Routes = [
  { path: 'people',  component: PeopleComponent },
  { path: 'results',  component: ResultsComponent },
  { path: 'add', component: CreatePersonComponent },
  { path: 'addRes', component: CreateResultComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: LoginComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
