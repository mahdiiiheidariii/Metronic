import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerOrdersComponent} from './customers/customer-orders/customer-orders.component';
import {MainComponent} from './layout/main/main.component';


const routes: Routes = [
    {path: 'admin', component: MainComponent},
    {path: 'customer-orders', component: CustomerOrdersComponent},
    // {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: '**', redirectTo: '/admin'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
