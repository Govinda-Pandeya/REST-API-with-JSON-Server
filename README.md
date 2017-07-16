# REST API with JSON Server
JSON Server is a Node Module that can be used to create `Fake REST JSON web service`. All we need is a JSON file for sample data which will be used as our back-end REST API.

## Step 1: create ~\json-server-ng4-app\data\ `my-database.js` file
module.exports = function () {
    return {
        "`customersInfoSource`": require('.`/mock-json-data/customers-info.json`')
    }
}

## Step 2: create ~\json-server-ng4-app\data\ `routes.json` file
{
    "`/api/customersinfoserver/getdata/`": "`/`"
}

## Step 3: create ~\json-server-ng4-app\ `proxy.config.json` file
{
    "/`api`/*": {
        "`target`": "`http://localhost:3000`",
        "changeOrigin": true,
        "secure": false,
        "logLevel": "debug"
    }
}

## Step 4: update ~\json-server-ng4-app\ `package.json` file
{
  `"scripts"`: {
      `"start"`: "concurrently --kill-others \"npm run server\" \"npm run update:watch\"",
      `"server"`: "ng serve --progress false --proxy-config `proxy.config.json`",
      `"mock"`: "`json-server` --watch data/`my-database.js` --routes data/`routes.json`",
      `"update:watch"`: "onchange \"data/**/*.json\" -i -- npm run mock",
},
  `"devDependencies"`: {  
      `"json-server"`: "^0.9.6",
      `"concurrently"`: "^3.4.0",
      `"onchange"`: "^3.2.1",
}

## Step 5: run ~\json-server-ng4-app\ `npm install` 
Now, you are good to go. Cheers! 
Navigate to `http://localhost:3000/` to check if JSON Server is running.

## Create data service to fetch data from JSON Server
At `customer-data.service.ts` 
fetchCustomersData() {
    const `url` = '`/api/customersinfoserver/getdata/customersInfoSource`';
    return this.http.get(`url`)
      .map(res => res.json());
  }   
  
and at `customers-info.component.ts` 
getCustomersInfo() {
  this.customerDataService.fetchCustomersData().`subscribe`((data) => {
    this.customersInfo = data;
  });
}

Here `this.customersInfo` is our required data object.

# Generate a new lazy loading module `customer info module`
~\json-server-ng4-app\src\app\modules>`ng g module customers-info`
~\json-server-ng4-app\src\app\modules>`ng g component customers-info`

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

3. Add routing paths in `app.component.html`
Home `http://localhost:4200/dashboard` for Dashboard, Lazy Module `http://localhost:4200/user` for User and JSON Server `http://localhost:4200/customersinfo` for Customer Info Module.

4. Run `npm start` for a development server. Navigate to `http://localhost:4200/`.



