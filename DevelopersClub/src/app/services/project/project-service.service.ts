import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getUserProjects(userid) {
    var headers = new HttpHeaders().set('id', userid);
    return this.http.get('http://localhost:3000/users/projects', {
      headers: headers
    });
  }

}
