import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ChipsService } from '../three/chips.service';

@Component({
  selector: 'basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  number: number = 0;
  collapsed = true;
  model: NgbDateStruct|any;
  increment() {
    this.number++;
  }
  decrement() {
    this.number--;
  }

  orders: any= [];
  lastOrder= new Date(2020, 4, 25);

  constructor(private chips: ChipsService) { }

  ngOnInit(): void {
    this.orders = this.chips.getOrders();
  }

  trackByOrderCode(index: number, order: any):string{
    return order.code;
  }
}
