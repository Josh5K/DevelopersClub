import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectComponent } from './project/project.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectslistComponent } from './projectslist/projectslist.component';
import { UserslistComponent } from './userslist/userslist.component';
import { ProjectcardComponent } from './components/projectcard/projectcard.component';
import { CommentboxComponent } from './components/commentbox/commentbox.component';
import { ProfileSidebarComponent } from './components/profile-sidebar/profile-sidebar.component';
import { CommentBoxComponent } from './components/comment-box/comment-box.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { SettingsComponent } from './pages/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FooterComponent,
    NavbarComponent,
    NotFoundComponent,
    ProjectComponent,
    LoginComponent,
    SignUpComponent,
    ProfileComponent,
    ProjectslistComponent,
    UserslistComponent,
    ProjectcardComponent,
    CommentboxComponent,
    ProfileSidebarComponent,
    CommentBoxComponent,
    ProjectCardComponent,
    BrowseComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
