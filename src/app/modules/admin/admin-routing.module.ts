import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerOrdersComponent} from './customers/customer-orders/customer-orders.component';
import {MainComponent} from './layout/main/main.component';
import {DetailsComponent} from './details/details.component';
import {ForwardersGetRequestsComponent} from './forwarders/forwarders-get-requests/forwarders-get-requests.component';
import {ForwardersSendRequestsComponent} from './forwarders/forwarders-send-requests/forwarders-send-requests.component';


const routes: Routes = [
    {path: 'admin', component: MainComponent},
    {path: 'customer-orders', component: CustomerOrdersComponent},
    {path: 'forwarders-get-requets', component: ForwardersGetRequestsComponent},
    {path: 'forwarders-send-requets', component: ForwardersSendRequestsComponent},
    {path: 'details', component: DetailsComponent},
    // {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: '**', redirectTo: '/admin'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
