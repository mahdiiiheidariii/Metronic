import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CustomerOrdersComponent } from './customers/customer-orders/customer-orders.component';
import {MainComponent} from './layout/main/main.component';
import { ForwardersGetRequestsComponent } from './forwarders/forwarders-get-requests/forwarders-get-requests.component';
import { ForwardersSendRequestsComponent } from './forwarders/forwarders-send-requests/forwarders-send-requests.component';
import { ForwardersOrderDetailComponent } from './forwarders/forwarders-order-detail/forwarders-order-detail.component';


@NgModule({
  declarations: [CustomerOrdersComponent, MainComponent, ForwardersGetRequestsComponent, ForwardersSendRequestsComponent, ForwardersOrderDetailComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
