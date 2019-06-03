import { Component, OnInit, ViewChild, ElementRef, AfterContentInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-video-section',
  templateUrl: './video-section.component.html',
  styleUrls: ['./video-section.component.scss']
})
export class VideoSectionComponent implements OnInit, AfterContentInit {

/*   @ViewChild('myVideo') video: ElementRef

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const position = this.video.nativeElement.getBoundingClientRect();
    console.log(position.top, window.pageYOffset);
  }
 */
  constructor() { }

  ngAfterContentInit() {
  }

/*   play() {
    this.video.nativeElement.play();
  }
 */
  ngOnInit() {
  }

}
