import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username;
  constructor(private route: ActivatedRoute, private http: HttpClient) { 
    this.username = this.route.snapshot.params.profile;
  }
  user;
  projects;
  userid;
  ngOnInit() {
    var headers = new HttpHeaders().set('name', this.username);
    
    this.http.get('http://localhost:3000/users', {
      headers: headers
    }).subscribe(data => {
      this.user = data;
      this.userid = data[0].id;
      console.log(this.userid);

      headers = new HttpHeaders().set('id', this.userid);
      this.http.get('http://localhost:3000/users/projects', {
        headers: headers
      }).subscribe(data => {
        this.projects = data;
        console.log(data);
      });
    });
    

  }
}
