import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { UserService } from '../../services/user/user-service.service';
import { ProjectService } from '../../services/project/project-service.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  public username: String;
  public user: Object;
  public projects: Object;

  constructor(private route: ActivatedRoute, private http: HttpClient, private userService: UserService, private projectService: ProjectService) { 
    this.username = this.route.snapshot.params.profile;
  }
  
  ngOnInit() {
      this.userService.getUserProfile(this.username).subscribe( data => {
        this.user = data;
        this.projects = this.projectService.getUserProjects(this.user[0].id).subscribe(data => {
          this.projects = data;
        });
      }); 
  }
}
