import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges
} from "@angular/core";

@Component({
  selector: "lifecycle-child",
  template: `
    <h3>Number: {{myNewNumber}}</h3>
    <p>Previous Value : {{previousValue}}</p>
    <p>Current Value : {{currentValue}}</p>
    <h3>Name: {{myName}}</h3>
    <!--Changed the variable to object-->
  `,
})
export class LifecycleChildComponent implements OnChanges, OnInit {
  private number: number = 0;
  previousValue: number = 0;
  currentValue: number = 0;
  @Input() myName;    /// ----------?? ERROR

  constructor() {
    this.myName = "";
  }

  @Input()
  get myNewNumber() {
    return this.number;
  }
  set myNewNumber(number: number) {
    this.number = number;
  }

  ngOnChanges(changes: SimpleChanges) {
    const newNumber: SimpleChange = changes.myNewNumber;
    this.previousValue = newNumber.previousValue;
    this.currentValue = newNumber.currentValue;
    this.myNewNumber = newNumber.currentValue;
    console.log(
      "Im in ngOnChanges hook: " + this.previousValue + " " + this.currentValue
    );
  }

  ngOnInit() {
    /**onInIt- executes after ngOnChanges hook and it is executed once. We can use this hook in order to initialize 
     the variables(simple variables, input decorated, arrays or object) that needs to be used for other functions 
     being written in that particular component whether its a child component or parent component or a directive. */
    console.log(
      "Im in ngOnInIt hook. Im gonna execute only once. ",
      this.myNewNumber
    );
  }

  ngOnDestroy() {
    console.log("Component has been destroyed!! ");
    /*This hook is used when our component is going to destroyed means that html is going to get removed from 
    the DOM. We can use this use when we need to usubsribe or we need to destroy all the content from the page 
    of this component. */
  }
}