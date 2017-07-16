import { Component, OnInit } from '@angular/core';

import { CustomerDataService } from './services/customer-data.service';

@Component({
  selector: 'customers-info',
  templateUrl: './customers-info.component.html',
  styleUrls: ['./customers-info.component.less']
})
export class CustomersInfoComponent implements OnInit {
  public customersInfo: any;

  constructor(
    private customerDataService: CustomerDataService
  ) {
    console.log('CustomersInfoComponent created!');
  }

  ngOnInit() {
    console.log('CustomersInfoComponent initialized ..');
    this.getCustomersInfo();
  }

  getCustomersInfo() {
    this.customerDataService.fetchCustomersData().subscribe((data) => {
      this.customersInfo = data;
      console.log('Getting Customers Data from JSON Server:');
      console.log(this.customersInfo);
    });
  }

}
