import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-customer-suggestion',
    templateUrl: './customer-suggestion.component.html',
    styleUrls: ['./customer-suggestion.component.css']
})
export class CustomerSuggestionComponent implements OnInit {
    items = [
        {
            id: 0,
            requestNo: 'شرکت ',
            requestType: '۳',
            startStation: ' 1',
            endStation: 'www.somthing.com',
            requestDate: '****',
            status: 1
        },
        {
            id: 1,
            requestNo: 'شرکت',
            requestType: '۲',
            startStation: ' 1',
            endStation: 'www.somthing.com',
            requestDate: '****',
            status: 5
        },
        {
            id: 2,
            requestNo: 'شرکت',
            requestType: '۱',
            startStation: ' 1',
            endStation: 'www.somthing.com',
            requestDate: '******',
            status: 3
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
