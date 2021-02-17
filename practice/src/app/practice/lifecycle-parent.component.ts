import { Component} from '@angular/core';

@Component({
  selector: 'lifecycle-parent',
  templateUrl: './lifecycle-parent.component.html'
})
export class LifecycleParentComponent {

  private number: number = 10;
  isVisible: boolean = true;
  name = "dimple";
  updateName() {
    this.name = "Dimple Verma";
    console.log("You can't update name any more.");
    /* 
    this.user = {
      name: "DimpleVerma"
    };
      Here it's not being passed by reference. Its value is not changed directly in the same memory location because  
      we are recreating the whole new object and it is going to allocate its own memory in the RAM so its going to get 
      triggered in ngOnChanged. So, it is up to us how we need to change the lifecycle. */
  }
  switchVisibility() {
    this.isVisible = !this.isVisible;
  }
  get count() {
    return this.number;
  }
  set count(value: number) {
    this.number = value;
  }
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }

}
