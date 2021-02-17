import { Component } from '@angular/core';

@Component({
    selector: 'property-binding',
    templateUrl: './property-binding.component.html'
})
export class PropertyBindingComponent {
    way1 = "Using Interpolation";
    way3 = './favicon.ico';
    isItalic : boolean = true;  // style binding
    fontSize : number = 20; 
    classToApply = 'boldClass italicClass' // class binding
    applyBoldClass : boolean = false; // if you want to add or remove a single css class as it is false so, it is removed
    applyItalicClass: boolean = true;

    addClasses(){   // class binding
      let classes = {
        boldClass : !this.applyBoldClass,
        italicClass : this.applyItalicClass
      }
      return classes;
    }

    addStyles(){    // style binding
      let styles = {
        'font-size.px' : this.fontSize,     
        'font-style' : this.applyItalicClass ? 'italic' : 'normal',
        'font-weight' : this.applyBoldClass ? 'bold' : 'normal',
      }
      return styles;
    }
  }
