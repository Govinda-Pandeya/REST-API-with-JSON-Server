import { Component, OnInit } from '@angular/core';

import { Customer } from './interfaces/customer.interface';
import { CustomerDataService } from './services/customer-data.service';

@Component({
  selector: '[app-customers-info]',
  templateUrl: './customers-info.component.html',
  styleUrls: ['./customers-info.component.less']
})
export class CustomersInfoComponent implements OnInit {
  public customersInfo: Customer[];
  public showTable: boolean;

  /**
   * Creates CustomersInfoComponent
   * @param  {CustomerDataService} privatecustomerDataService
   */
  constructor(
    private customerDataService: CustomerDataService
  ) {
    console.log('CustomersInfoComponent created!');
  }

  /**
   * Initially hides customers details table. Calls function to get customers data.
   */
  ngOnInit() {
    console.log('CustomersInfoComponent initialized ..');
    this.showTable = false;
    this.getCustomersInfo();
  }

  /**
   * Gets customers info data from customers service.
   */
  getCustomersInfo() {
    this.customerDataService.fetchCustomersData().subscribe((data) => {
      this.customersInfo = data;
      console.log('Getting Customers Data from JSON Server:');
      console.log(this.customersInfo);
      // console.log(JSON.stringify(this.customersInfo));
    });
  }

  /**
   * Shows customer details table wnen show detail button is clicked.
   */
  showDetails() {
    this.showTable = true;
  }

  /**
   * Hides customer details table wnen hide detail button is clicked.
   * @param  {boolean} event
   */
  onHide(event) {
    this.showTable = event;
  }

}
