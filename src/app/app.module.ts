import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {DataService} from './data.service';
import {AppRoutingModule} from './app-routing.module';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PeopleComponent } from './people/people.component';
import { CreatePersonComponent } from './create-person/create-person.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ResultsComponent } from './results/results.component';
import { CreateResultComponent } from './create-result/create-result.component';
import { AgmCoreModule } from '@agm/core';
import {LoginComponent} from "./login/login.component";


@NgModule({
  declarations: [
    AppComponent,
    PersonDetailsComponent,
    PeopleComponent,
    CreatePersonComponent,
    ResultsComponent,
    CreateResultComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAO6aMg20saQ5_fziBpjQ7Dohz_f6THMj0'
    })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
