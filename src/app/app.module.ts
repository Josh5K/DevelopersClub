import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProfileSidebarComponent } from './components/profile-sidebar/profile-sidebar.component';
import { CommentBoxComponent } from './components/comment-box/comment-box.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProjectComponent } from './pages/project/project.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeadlineComponent } from './components/headline/headline.component';
import { ProjectCarouselComponent } from './components/project-carousel/project-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileSidebarComponent,
    CommentBoxComponent,
    ProjectCardComponent,
    BrowseComponent,
    SettingsComponent,
    FooterComponent,
    NavbarComponent,
    LandingComponent,
    LoginComponent,
    ProfileComponent,
    ProjectComponent,
    NotFoundComponent,
    HeadlineComponent,
    ProjectCarouselComponent
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
