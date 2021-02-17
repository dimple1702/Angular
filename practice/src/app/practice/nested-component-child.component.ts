import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    
    selector: 'nested-component-child',
    template: `
    <div style = "margin-bottom:15px;">
      <span >Show : </span>
      <input name='options' type='radio' value="All" [(ngModel)]="BtnValue" (change)="onRadioButtonSelectionChange()">
       <span>{{'All(' + all + ')'}}</span>
      <input name="options" type="radio" value="Male" [(ngModel)]="BtnValue" (change)="onRadioButtonSelectionChange()">
       <span>{{"Male(" + male + ")"}}</span>
      <input name="options" type="radio" value="Female" [(ngModel)]="BtnValue" (change)="onRadioButtonSelectionChange()">
       <span>{{"Female(" + female + ")"}}</span>
    </div>
    `
})
export class NestedComponentChildComponent {

    @Input() all: number = 0;
    @Input() male: number = 0;
    @Input() female: number = 0;

    BtnValue: string = 'All';

    @Output()
    countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();
    
    onRadioButtonSelectionChange() {
        this.countRadioButtonSelectionChanged.emit(this.BtnValue);
    }
}
