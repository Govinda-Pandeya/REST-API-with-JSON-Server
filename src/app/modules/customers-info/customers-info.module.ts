import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'; 

import { CustomersInfoComponent } from 'app/modules/customers-info/customers-info.component';

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
  declarations: [CustomersInfoComponent]
})
export class CustomersInfoModule { }
