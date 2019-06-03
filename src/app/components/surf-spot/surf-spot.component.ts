import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-surf-spot',
  templateUrl: './surf-spot.component.html',
  styleUrls: ['./surf-spot.component.scss']
})
export class SurfSpotComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var clicks = 0;

    $(document).ready(function() {
      $(".title-oahu").click(
        function(){
          if(clicks == 0){
            $('.title-zarautz').addClass('hideDiv');
            $('.title-j-bay').addClass('hideDiv');
            $('.title-mentawai').addClass('hideDiv');
            $('.mentawai_beach').addClass('change1');
            $('.under_water').addClass('changeSmall3');
            $('.description').addClass('showText');
            clicks=1;
          } else {
            $('.title-j-bay').removeClass('hideDiv');
            $('.title-mentawai').removeClass('hideDiv');
            $('.title-zarautz').removeClass('hideDiv');
            $('.mentawai_beach').removeClass('change1');
            $('.under_water').removeClass('changeSmall3');
            $('.description').removeClass('showText');

            clicks = 0;
          }
      });
    });

    $(document).ready(function() {
      $(".title-mentawai").click(
        function(){
          if(clicks == 0){
            $('.title-zarautz').addClass('hideDiv');
            $('.title-j-bay').addClass('hideDiv');
            $('.title-oahu').addClass('hideDiv');
            $('.under_water').removeClass('showImage');
            $('.description').addClass('showText');

            clicks = 1;
          } else {
            $('.title-j-bay').removeClass('hideDiv');
            $('.title-oahu').removeClass('hideDiv');
            $('.title-zarautz').removeClass('hideDiv');
            $('.under_water').addClass('showImage');
            $('.description').removeClass('showText');
            console.log(clicks);
            clicks = 0;
          }
      });
    });

    $(document).ready(function() {
      $(".title-zarautz").click(
        function(){
          if(clicks == 0){
            $('.title-oahu').addClass('hideDiv');
            $('.title-j-bay').addClass('hideDiv');
            $('.title-mentawai').addClass('hideDiv');
            $('.mentawai_beach').addClass('change2');
            $('.under_water').removeClass('showImage');
            $('.under_water').addClass('changeSmall2');
            $('.description').addClass('showText');
            clicks = 1;
          } else {
            $('.title-j-bay').removeClass('hideDiv');
            $('.title-mentawai').removeClass('hideDiv');
            $('.title-oahu').removeClass('hideDiv');
            $('.mentawai_beach').removeClass('change2');
            $('.under_water').addClass('showImage');
            $('.under_water').removeClass('changeSmall2');
            $('.description').removeClass('showText');
            clicks = 0;
          }
      });
    });

    $(document).ready(function() {
      $(".title-j-bay").click(
        function(){
          if(clicks == 0){
            $('.title-zarautz').addClass('hideDiv');
            $('.title-oahu').addClass('hideDiv');
            $('.title-mentawai').addClass('hideDiv');
            $('.under_water').addClass('changeSmall4');
            $('.under_water').removeClass('showImage');
            $('.mentawai_beach').addClass('change3');
            $('.description').addClass('showText');
            clicks = 1;
          } else {
            $('.title-oahu').removeClass('hideDiv');
            $('.title-mentawai').removeClass('hideDiv');
            $('.title-zarautz').removeClass('hideDiv');
            $('.under_water').addClass('showImage');
            $('.under_water').removeClass('changeSmall4');
            $('.mentawai_beach').removeClass('change3');
            $('.description').removeClass('showText');
            clicks = 0;
          }
      });
    });

  }


}
