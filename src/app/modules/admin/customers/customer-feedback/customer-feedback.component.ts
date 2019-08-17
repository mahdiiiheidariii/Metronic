import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-customer-feedback',
    templateUrl: './customer-feedback.component.html',
    styleUrls: ['./customer-feedback.component.css']
})
export class CustomerFeedbackComponent implements OnInit {
    items = [
        {
            id: 0,
            requestNo: 'بازخورد ',
            requestType: 'داخلی',
            startStation: 'درخواست 1',
            endStation: 'پیشنهاد 1',
            requestDate: '1398/14/03',
            status: 1
        },
        {
            id: 1,
            requestNo: 'بازخورد',
            requestType: 'داخلی',
            startStation: 'درخواست 1',
            endStation: 'انتقاد 1',
            requestDate: '1398/14/03',
            status: 5
        },
        {
            id: 2,
            requestNo: 'بازخورد',
            requestType: 'داخلی',
            startStation: 'درخواست 1',
            endStation: 'شکایت 1',
            requestDate: '1398/14/03',
            status: 3
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
