import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rai-order-details',
  templateUrl: './rai-order-details.component.html',
  styleUrls: ['./rai-order-details.component.css']
})
export class RaiOrderDetailsComponent implements OnInit {

    items = [
        {
            unite: 'سیر و حرکت ',
            status: 0,
            requestDate: '1398/14/03',
            message: 'تست',
        },
        {
            unite: 'خط و سازه ریلی',
            status: 1,
            requestDate: '1398/14/03',
            message: 'تست',
        },
        {
            unite: 'ایمنی و نظارت',
            status: 2,
            requestDate: '1398/14/03',
            message: 'تست',
        },
        {
            unite: 'ناوگان',
            status: 2,
            requestDate: '1398/14/03',
            message: 'تست',
        },

    ];

  constructor() { }

  ngOnInit() {
  }

}
