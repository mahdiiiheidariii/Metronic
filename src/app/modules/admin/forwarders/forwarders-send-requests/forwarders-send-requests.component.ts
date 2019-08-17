import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forwarders-send-requests',
  templateUrl: './forwarders-send-requests.component.html',
  styleUrls: ['./forwarders-send-requests.component.css']
})
export class ForwardersSendRequestsComponent implements OnInit {

    items = [
        {id: 0, requestNo: 'بازخورد ', requestType: 'داخلی', startStation: 'درخواست 1', endStation: 'پیشنهاد 1', requestDate: '1398/14/03'},
        {id: 1, requestNo: 'بازخورد', requestType: 'داخلی', startStation: 'درخواست 1', endStation: 'انتقاد 1', requestDate: '1398/14/03'},
        {id: 2, requestNo: 'بازخورد', requestType: 'داخلی', startStation: 'درخواست 1', endStation: 'شکایت 1', requestDate: '1398/14/03'},
    ];
    constructor() { }

    ngOnInit() {
    }

}
