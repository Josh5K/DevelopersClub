import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private http: HttpClient) { }
  projects;
  ngOnInit() {
    this.http.get('http://localhost:3000/projects').subscribe(data => {
      this.projects = data;
      //Sorts data by most points
      this.projects.sort(SortByPoints);
      //Truncates the results to 4
      this.projects.length = 4;
    });

    function SortByPoints(x,y) {
      return ((x.points == y.points) ? 0 : ((x.points < y.points) ? 1 : -1 ));
    }

  }
}