import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showNavigationArrows = false;
  
  images = ["./assets/imgs/carousal-1.jpg", "./assets/imgs/carousal-2.jpg", "./assets/imgs/carousal-3.jpg"];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
  }
}
