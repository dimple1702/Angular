import { Component } from '@angular/core';

@Component({
  selector: 'event-binding',
  templateUrl : './event-binding.component.html'

})
export class EventBindingComponent {

  firstName: string = "Dimple";
  lastName: string = "Verma";
  gender: string = "Female";
  age: number = 20;

  isAble: boolean = false;
  showDetails: boolean = false;
  source: string = "assets/imgs/logo.png";
  family: string = "Lucida Handwriting";

  onClick(): void {
    alert("You clicked on a button!");
  }

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }

  switchAbility(): void {
    this.isAble = !this.isAble;
    console.log("Ability of Hello button is toggled.");
  }

  myMethod(event: any) {
    console.log(event);
  }

  hoverOnMouse(): void {
    console.log("You hovered on a paragraph!");
  }
}
