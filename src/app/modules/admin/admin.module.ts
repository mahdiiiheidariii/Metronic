import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CustomerOrdersComponent } from './customers/customer-orders/customer-orders.component';
import {MainComponent} from './layout/main/main.component';


@NgModule({
  declarations: [CustomerOrdersComponent, MainComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
