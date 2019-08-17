import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rai-get-requests',
  templateUrl: './rai-get-requests.component.html',
  styleUrls: ['./rai-get-requests.component.css']
})
export class RaiGetRequestsComponent implements OnInit {

    items = [
        {id: 0, requestNo: 'درخواست کننده', requestType: 'عنوان شرکت', startStation: 'داخلی', endStation: 'مبدا 1', requestDate: '1398/14/03', status: 1},
        {id: 1, requestNo: 'درخواست کننده', requestType: 'عنوان شرکت', startStation: ' داخلی', endStation: 'مبدا 1', requestDate: '1398/14/03', status: 5},
        {id: 2, requestNo: 'درخواست کننده', requestType: 'عنوان شرکت', startStation: ' داخلی', endStation: 'مبدا 1', requestDate: '1398/14/03', status: 3},
    ];
    constructor() { }

    ngOnInit() {
    }

}
