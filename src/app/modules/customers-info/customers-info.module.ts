import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { CustomerDataService } from './services/customer-data.service';

import { CustomersInfoComponent } from 'app/modules/customers-info/customers-info.component';
import { CustomerComponent } from 'app/modules/customers-info/components/customer/customer.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersInfoComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CustomersInfoComponent,
    CustomerComponent
  ],
  providers: [CustomerDataService]
})
export class CustomersInfoModule { }
