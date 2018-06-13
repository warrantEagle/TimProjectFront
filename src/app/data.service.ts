import { Injectable } from '@angular/core';
import {Result} from './result';
import {Http} from '@angular/http';
import {Person} from './person';
import { ActivatedRoute, Params } from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {stringDistance} from 'codelyzer/util/utils';
import {LoginData} from './loginData';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True'})
};

@Injectable()
export class DataService {

  private resultUrl = '/api/result';
  private peopleUrl = '/api';
  constructor(private http: HttpClient) { }
  /**
   * W dalszej częsci pobieranie danych o uzytkownikach
   */
 getPeople() {
    return this.http.get<Person[]>(this.peopleUrl);
  }

  create(person: Person) {
    return this.http.post<Person>(this.peopleUrl, person);
  }

  getPerson(login: string) {
    return this.http.get<Person>(this.peopleUrl + '/' + login);
  }

  delete(login: string) {
    return this.http.delete(this.peopleUrl + '/' + login);
  }

  /**
   * W dalszej częsci pobieranie danych o rezultatach
   */
  getResults() {
    return this.http.get<Result[]>(this.resultUrl);
  }
  deleteResult(result: Result) {
    return this.http.delete(this.resultUrl + '/' + result);
  }
  createResult(result: Result )  {
    return this.http.post<Result>(this.resultUrl, result);
  }

  /**
   * logowanie
   */
  check(loginData: LoginData) {
    return this.http.get<Person>(this.peopleUrl + '/login/' + loginData.login + '/' + loginData.password );
  }
}
