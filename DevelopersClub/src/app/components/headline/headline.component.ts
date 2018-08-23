import { Component, OnInit } from '@angular/core';
import { LandingComponent } from '../../pages/landing/landing.component';

@Component({
  selector: 'app-headline',
  providers: [LandingComponent],
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})

export class HeadlineComponent implements OnInit {

  public current: String[];
  //Temp values will be pulled from API
  public tab1: String[] = ["tab1","tab1","tab1","tab1","tab1","tab1","tab1","tab1","tab1","tab1"];
  public tab2: String[] = ["tab2","tab2","tab2","tab2","tab2","tab2","tab2","tab2","tab2","tab2"];
  public tab3: String[] = ["tab3","tab3","tab3","tab3","tab3","tab3","tab3","tab3","tab3","tab3"];

  constructor() { }

  ngOnInit() {
    this.current = this.tab1;
  }

}
