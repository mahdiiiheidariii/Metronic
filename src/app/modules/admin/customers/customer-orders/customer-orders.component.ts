import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-customer-orders',
    templateUrl: './customer-orders.component.html',
    styleUrls: ['./customer-orders.component.css']
})
export class CustomerOrdersComponent implements OnInit {
    activeIndex = 0;
    items = [
        {id: 0, requestNo: 'درخواست', requestType: 'داخلی', startStation: 'مبدا 1', endStation: 'مقصد 1', requestDate: '1398/14/03'},
        {id: 1, requestNo: 'درخواست', requestType: 'داخلی', startStation: 'مبدا 1', endStation: 'مقصد 1', requestDate: '1398/14/03'},
        {id: 2, requestNo: 'درخواست', requestType: 'داخلی', startStation: 'مبدا 1', endStation: 'مقصد 1', requestDate: '1398/14/03'},
        {id: 3, requestNo: 'درخواست', requestType: 'داخلی', startStation: 'مبدا 1', endStation: 'مقصد 1', requestDate: '1398/14/03'},
        {id: 4, requestNo: 'درخواست', requestType: 'داخلی', startStation: 'مبدا 1', endStation: 'مقصد 1', requestDate: '1398/14/03'},
        {id: 5, requestNo: 'درخواست', requestType: 'داخلی', startStation: 'مبدا 1', endStation: 'مقصد 1', requestDate: '1398/14/03'},
    ];
    subItems = [
        {id: 0, requestNo: 'درخواست', requestType: 'داخلی', startStation: 'مبدا 1', endStation: 'مقصد 1', requestDate: '1398/14/03'},
        {id: 1, requestNo: 'درخواست', requestType: 'داخلی', startStation: 'مبدا 1', endStation: 'مقصد 1', requestDate: '1398/14/03'},
        {id: 2, requestNo: 'درخواست', requestType: 'داخلی', startStation: 'مبدا 1', endStation: 'مقصد 1', requestDate: '1398/14/03'},
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
