import { Component, OnInit } from '@angular/core';

declare var M:any;
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var options = {
      indicators: true
    };
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  }
}
