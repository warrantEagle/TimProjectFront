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
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AgmCoreModule } from '@agm/core';
import { ResultDetailsComponent } from './result-details/result-details.component';
import { RegisterComponent } from './register/register.component';
import { ChartsComponent } from './charts/charts.component';
import {FusionChartsModule} from 'angular4-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';

FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme)

@NgModule({
  declarations: [
    AppComponent,
    PersonDetailsComponent,
    PeopleComponent,
    CreatePersonComponent,
    ResultsComponent,
    CreateResultComponent,
    LoginComponent,
    HomeComponent,
    AdminPageComponent,
    ResultDetailsComponent,
    RegisterComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    FusionChartsModule,
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
