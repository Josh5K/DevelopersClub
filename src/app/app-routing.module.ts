//Angular Modules
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';

//CLI Generated Components
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProjectComponent } from './pages/project/project.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeadlineComponent } from './components/headline/headline.component';

const routes: Routes = [
  //Paths
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'Profile/:profile', component: ProfileComponent },
  { path: '404', component: NotFoundComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'login', component: LoginComponent },
  { path: 'Project/:project', component: ProjectComponent },
  { path: ':identifer/settings', component: SettingsComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'test', component: HeadlineComponent },
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
