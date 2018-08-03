import { Component, OnInit } from '@angular/core';
import { LandingComponent } from '../../pages/landing/landing.component';

@Component({
  selector: 'app-headline',
  providers: [LandingComponent],
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
