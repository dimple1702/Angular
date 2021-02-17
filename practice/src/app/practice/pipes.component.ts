import { Component} from '@angular/core';

@Component({
  selector: 'pipes',
  templateUrl: './pipes.component.html'
})
export class PipesComponent{
  title = 'pipe-component';
  todaydate = new Date(); 
}
