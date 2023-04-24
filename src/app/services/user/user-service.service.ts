import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Userslist } from 'src/app/models/user/userslist';

import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(private http: HttpClient) {}

  // define a method to find all users ....
  findAllUsers(): Observable<Userslist[]> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json; charset=utf-8');
    httpHeaders.set('Acess-Control-Allow-Origin', '*');

    return this.http.get<Userslist[]>('http://localhost:8080/findAllUsers', {
      headers: httpHeaders,
    });
  }

  // define a method to save all Users ....
  saveAllUsers(users: Userslist[]) {
    const httpHeaders = new HttpHeaders();
    return this.http.post<Userslist[]>(
      'http://localhost:8080/saveAllUsers',
      users,
      {
        headers: httpHeaders,
      }
    );
  }

  // define a method to delete all users ....
  deleteAll() {
    const httpHeaders = new HttpHeaders();
    return this.http.delete<Userslist[]>('http://localhost:8080/deleteAll', {
      headers: httpHeaders,
    });
  }
}
