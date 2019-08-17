import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CustomerOrdersComponent } from './customers/customer-orders/customer-orders.component';
import {MainComponent} from './layout/main/main.component';
import { ForwardersGetRequestsComponent } from './forwarders/forwarders-get-requests/forwarders-get-requests.component';
import { ForwardersSendRequestsComponent } from './forwarders/forwarders-send-requests/forwarders-send-requests.component';
import { ForwardersOrderDetailComponent } from './forwarders/forwarders-order-detail/forwarders-order-detail.component';
import { CustomerPortableMonitorComponent } from './customers/customer-portable-monitor/customer-portable-monitor.component';
import { CustomerFeedbackComponent } from './customers/customer-feedback/customer-feedback.component';
import { CreateCustomerFeedbackComponent } from './customers/customer-feedback/create-customer-feedback/create-customer-feedback.component';
import { RaiGetRequestsComponent } from './rai/rai-get-requests/rai-get-requests.component';
import { CustomerSuggestionComponent } from './customers/customer-suggestion/customer-suggestion.component';

@NgModule({
  declarations: [CustomerOrdersComponent,
      MainComponent, ForwardersGetRequestsComponent, ForwardersSendRequestsComponent,
      CustomerPortableMonitorComponent, CustomerFeedbackComponent, ForwardersOrderDetailComponent,
      CreateCustomerFeedbackComponent, RaiGetRequestsComponent, CustomerSuggestionComponent],

  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
