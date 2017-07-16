# REST API with JSON Server
JSON Server is a Node Module that can be used to create Fake REST JSON web service. All we need is a JSON file for sample data which will be used as our back-end REST API.

## Setup JSON Server



## Generate a new lazy loading module `customer info module`
json-server-ng4-app\src\app\modules>`ng g module customers-info`
json-server-ng4-app\src\app\modules>`ng g component customers-info`

1. add routes for customers-info module in `app.module.ts` const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
      path: 'dashboard', 
      component: DashboardComponent, 
  },
  {
    path: 'user',
    loadChildren: 'app/modules/user/user.module#UserModule'
  },
  `{`
    `path: 'customersinfo',`
    `loadChildren: 'app/modules/customers-info/customers-info.module#CustomersInfoModule'`
  `}`
];

2. add routes in `customers-info.module.ts`
import { Routes, RouterModule } from '@angular/router'; const routes: Routes = [
  `{`
    `path: '',`
    `component: CustomersInfoComponent`
  `}`
]; @NgModule({
  imports: [
    CommonModule,
    `RouterModule.forChild(routes)`
  ],
  declarations: [CustomersInfoComponent]
})

3. Run `ng serve` or, `npm start` for a development server. Navigate to `http://localhost:4200/`.

## `Add routing paths` for Dashboard Module, User Module and Customer Info Module in `app.component.html`: Home `http://localhost:4200/dashboard`,  Lazy Module `http://localhost:4200/user` and JSON Server `http://localhost:4200/customersinfo` respectively.

