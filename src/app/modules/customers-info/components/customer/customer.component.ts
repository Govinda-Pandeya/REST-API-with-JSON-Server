import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { Customer } from '../../interfaces/customer.interface';

@Component({
  selector: '[app-customer]',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.less']
})
export class CustomerComponent implements OnInit {
  @Input() customersInfo: Customer[];
  @Output() hide: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  /**
   * Emits boolean value 'false' to parent component when hide button is clicked.
   */
  hideDetails() {
    this.hide.emit(false);
  }

}
