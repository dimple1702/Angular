import { Component } from '@angular/core';

@Component({
    selector: 'two-way-binding',
    template: `
      <h2>~~{{title}}</h2>    
      Try to write something: <input [(ngModel)]="fullName" /> <br/>   
      <!--Name: <input [value]= 'fullName' (input)= fullName.$event.target.value'/> -->
      <p> {{fullName}} </p>  
    `,
    styles:[`
        
    `]
})
export class TwoWayBindingComponent {
    title: string = 'Two-way Binding'
    fullName: string = "";    
}

/*
[(ngModel)] : sqquare brackets on the outside are for property binding and
      round brackets on the inside are for event binding
*/