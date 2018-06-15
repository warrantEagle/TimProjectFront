import { Injectable } from '@angular/core';
import {Result} from './result';
import {Person} from './person';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginData} from './loginData';
import {Point} from './point';
import {forEach} from '@angular/router/src/utils/collection';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True'})
};

@Injectable()
export class DataService {

  private resultUrl = 'http://localhost:8080/api/result';
  private peopleUrl = 'http://localhost:8080/api';
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
    return this.http.post<Result>(this.resultUrl + '/createResult', result);
  }

  /**
   * logowanie
   */
  check(loginData: LoginData) {
    return this.http.get<LoginData>(this.peopleUrl + '/login/' + loginData.login + '/' + loginData.password );
  }

  createPoints(points: Point[]) {

    alert('Length: !' + points.length);
    return this.http.post<Point[]>(this.resultUrl + '/createPoints', points);
  }
}
