import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-projectslist',
  templateUrl: './projectslist.component.html',
  styleUrls: ['./projectslist.component.css']
})

export class ProjectslistComponent implements OnInit {

  constructor(private http: HttpClient) { }

  projects;
  ngOnInit() {
    
    this.http.get('http://localhost:3000/projects').subscribe(data => {
      this.projects = data;
      //Sorts data by most points
      this.projects.sort(SortByPoints);
    });

      function SortByPoints(x,y) {
      return ((x.points == y.points) ? 0 : ((x.points < y.points) ? 1 : -1 ));
    }
  }

  status: boolean = true;
  toggleVote () {
    this.status = !this.status;
  }  
}

