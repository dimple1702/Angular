import { Component } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentRate: number = 3;
  show = false;
  autohide = true;
  constructor(config: NgbRatingConfig) {
    config.max = 5;
  }
}
