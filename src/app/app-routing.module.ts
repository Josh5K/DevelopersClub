//Angular Modules
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';

//CLI Generated Components
import { LandingComponent } from './landing/landing.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectComponent } from './project/project.component';
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { ProfileComponent } from './profile/profile.component';
import { ProjectslistComponent } from './projectslist/projectslist.component';

const routes: Routes = [
  //Paths
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'Profile/:profile', component: ProfileComponent },
  { path: '404', component: NotFoundComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'Projects', component: ProjectslistComponent},
  { path: 'Project/:project', component: ProjectComponent },
  //Redirects
  { path: '**', component: NotFoundComponent },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
