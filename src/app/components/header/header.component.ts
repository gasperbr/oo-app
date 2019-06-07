import { Component, OnInit, NgModule } from '@angular/core';
import { IntroSectionComponent } from '../intro-section/intro-section.component';
import { FirstSectionComponent } from '../first-section/first-section.component';
import { RouterModule, Routes} from '@angular/router';


const appRoutes: Routes = [
  {
    path: 'home',
    component: IntroSectionComponent
  },
  {
    path: 'about',
    component: FirstSectionComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ]
})

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  rotatedX = true;

  constructor() { }

  ngOnInit() {
  }

  w3_open() {
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("overlay").style.display = "block";
  }
  
  w3_close() {
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("overlay").style.display = "none";
  }

}
