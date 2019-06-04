import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IntroSectionComponent } from './components/intro-section/intro-section.component';
import { FirstSectionComponent } from './components/first-section/first-section.component';
import { SurfBoardsComponent } from './components/surf-boards/surf-boards.component';
import { VideoSectionComponent } from './components/video-section/video-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { SurfSpotComponent } from './components/surf-spot/surf-spot.component';
import { MakingBoardsComponent } from './components/making-boards/making-boards.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroSectionComponent,
    FirstSectionComponent,
    SurfBoardsComponent,
    VideoSectionComponent,
    FooterComponent,
    SurfSpotComponent,
    MakingBoardsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
