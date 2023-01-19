import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from "./component/header/header.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {ProductsComponent} from "./component/products/products.component";
import {CustomersComponent} from "./component/customers/customers.component";
import {BillsComponent} from "./component/bills/bills.component";

const routes: Routes = [
  {path: "", component: HeaderComponent, children: [
      {path: "", component: DashboardComponent},
      {path: "products", component: ProductsComponent},
      {path: "customers", component: CustomersComponent},
      {path: "bills", component: BillsComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
