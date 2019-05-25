import { Component, OnInit } from '@angular/core';

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
