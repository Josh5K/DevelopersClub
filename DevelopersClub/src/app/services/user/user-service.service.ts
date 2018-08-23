import { Injectable } from '@angular/core';
import { HttpHeaders, HttpResponse, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  public user: Object;

  getCurrentUser() {

  }

  getCurrentUserProjects() {
    
  }

  getUserProfile(username) {
    var headers = new HttpHeaders().set('name', username)
    return this.http.get('http://localhost:3000/users', {
      headers: headers
    });
  }

  getUserProjects(id) {

  }

  login(username, password) {

  }

  getSession() {

  }
}
