import { Component, OnInit } from '@angular/core';
import { HeadlineComponent } from '../../components/headline/headline.component';
import { ProjectCarouselComponent } from '../../components/project-carousel/project-carousel.component';

@Component({
  selector: 'app-landing',
  providers: [HeadlineComponent, ProjectCarouselComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit {

  constructor() {  }
  
  ngOnInit() { }

}