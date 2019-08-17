import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forwarders-send-requests',
  templateUrl: './forwarders-send-requests.component.html',
  styleUrls: ['./forwarders-send-requests.component.css']
})
export class ForwardersSendRequestsComponent implements OnInit {

    items = [
        {id: 0,
            requestNo: 'درخواست  ',
            requestType: 'نوع واگن',
            startStation: 'مبدا 1',
            endStation: 'مقصد 1',
            requestDate: '1398/14/03',
            status: 1
        },
        {id: 1,
            requestNo: 'درخواست ',
            requestType: 'نوع واگن',
            startStation: 'مبدا 2',
            endStation: 'مقصد 2',
            requestDate: '1398/14/03',
            status: 5
        },
        {id: 2,
            requestNo: 'درخواست ',
            requestType: 'نوع واگن',
            startStation: 'مبدا 3',
            endStation: 'مقصد 3',
            requestDate: '1398/14/03',
            status: 3
        },
    ];
    constructor() { }

    ngOnInit() {
    }

}
