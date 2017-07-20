import { Component, OnInit } from '@angular/core';
import { Address } from './interfaces/address.interface';
import { Person } from './interfaces/person.interface';

@Component({
  selector: '[app-dashboard]',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  public person: Person;
  public address: Address;
  public showUpdate: boolean;
  public hideShow: string;

  constructor() {
    console.log('DashboardComponent created!');
  }

  ngOnInit() {
    console.log('DashboardComponent initialized ..');
    this.initialize();
  }

  /**
   * Initiales 'person' and 'address' objects along with 'showUpdate' and 'hideShow' variables.
   */
  initialize() {
    this.showUpdate = false;
    this.hideShow = 'Update Info';
    this.person = {
      name: 'Bharat',
      email: 'bpaans@example.com',
      age: 30
    };
    this.address = {
      street: '1400 Esters RD',
      city: 'Irving',
      state: 'TX'
    };

  }

  /**
   * Sets name to 'Bharat Pandey' when clicked.
   */
  onClick() {
    this.person.name = 'Bharat Pandey';
  }

  /**
   * Toggles value of 'showUpdate' and updates value of 'hideShow' variable.
   */
  toggleEdit() {
    if (!this.showUpdate) {
      this.hideShow = 'Collapse Now';
    } else {
      this.hideShow = 'Update Info'
    }
    this.showUpdate = !this.showUpdate;
  }

}
