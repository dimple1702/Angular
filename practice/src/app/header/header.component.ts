import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public isMenuCollapsed = true;

  open():void{
    alert("We are working from home in this pandemic!!");
  }
}
