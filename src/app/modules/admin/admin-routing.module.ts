import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerOrdersComponent} from './customers/customer-orders/customer-orders.component';
import {MainComponent} from './layout/main/main.component';
import {ForwardersGetRequestsComponent} from './forwarders/forwarders-get-requests/forwarders-get-requests.component';
import {ForwardersSendRequestsComponent} from './forwarders/forwarders-send-requests/forwarders-send-requests.component';
import {ForwardersOrderDetailComponent} from './forwarders/forwarders-order-detail/forwarders-order-detail.component';
import {CustomerPortableMonitorComponent} from './customers/customer-portable-monitor/customer-portable-monitor.component';
import {CustomerFeedbackComponent} from './customers/customer-feedback/customer-feedback.component';
import {CreateCustomerFeedbackComponent} from './customers/customer-feedback/create-customer-feedback/create-customer-feedback.component';
import {RaiGetRequestsComponent} from './rai/rai-get-requests/rai-get-requests.component';
import {CustomerSuggestionComponent} from './customers/customer-suggestion/customer-suggestion.component';

const routes: Routes = [
    {path: 'admin', component: MainComponent},
    {path: 'customer-orders', component: CustomerOrdersComponent},
    {path: 'forwarders-get-requets', component: ForwardersGetRequestsComponent},
    {path: 'forwarders-send-requets', component: ForwardersSendRequestsComponent},
    {path: 'forwarders-order-detail', component: ForwardersOrderDetailComponent},
    {path: 'monitoring', component: CustomerPortableMonitorComponent},
    {path: 'customer-feedback', component: CustomerFeedbackComponent},
    {path: 'create-customer-feedback', component: CreateCustomerFeedbackComponent},
    {path: 'rai-get-requets', component: RaiGetRequestsComponent},
    {path: 'customer-suggestion', component: CustomerSuggestionComponent},
    // {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: '**', redirectTo: '/admin'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
