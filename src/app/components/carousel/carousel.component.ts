import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var click = 0;

    $(document).ready(function(){
      $('.board1').click(function(){
        if(click == 0){
          $('.board1').addClass('change1');
          click = 1;
        } else {
          $('.board1').removeClass('change1');
          click = 0;
        }
      });
    });

    click = 0;

    $(document).ready(function(){
      $('.board2').click(function(){
        if(click == 0){
          $('.board2').addClass('change2');
          click = 1;
        } else {
          $('.board2').removeClass('change2');
          click = 0;
        }
      });
    });

    click = 0;

    $(document).ready(function(){
      $('.board3').click(function(){
        if(click == 0){
          $('.board3').addClass('change3');
          click = 1;
        } else {
          $('.board3').removeClass('change3');
          click = 0;
        }
      });
    });

    click = 0;

    $(document).ready(function(){
      $('.board4').click(function(){
        if(click == 0){
          $('.board4').addClass('change4');
          click = 1;
        } else {
          $('.board4').removeClass('change4');
          click = 0;
        }
      });
    });

    click = 0;

    $(document).ready(function(){
      $('.board5').click(function(){
        if(click == 0){
          $('.board5').addClass('change5');
          click = 1;
        } else {
          $('.board5').removeClass('change5');
          click = 0;
        }
      });
    });
  
  }

}
