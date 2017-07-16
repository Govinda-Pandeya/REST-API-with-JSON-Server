import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { CustomersInfoComponent } from 'app/modules/customers-info/customers-info.component';
import { CustomerDataService } from './services/customer-data.service';

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
  declarations: [CustomersInfoComponent],
  providers: [CustomerDataService]
})
export class CustomersInfoModule { }
