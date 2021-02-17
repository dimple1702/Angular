import { Component} from '@angular/core';

@Component({
  selector: 'interpolation',
  templateUrl: './interpolation.component.html'
})
export class InterpolationComponent {
  name : string = "Dimple Verma";
  title: string = "Interpolation";
  recommended = "Logo of Angular is:"
  logo = './assets/imgs/logo.png';

  list= ['Elena','Damon','Stefan','Katherine','Klaus','Caroline'];

  getResult(){
    return "getResult() method";
  }

}
