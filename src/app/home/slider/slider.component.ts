import { Component, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
  
export class SliderComponent implements OnInit {
 

  constructor() { }

  ngOnInit() {
    jQuery('#slideshow').nivoSlider() ;
  }

}
