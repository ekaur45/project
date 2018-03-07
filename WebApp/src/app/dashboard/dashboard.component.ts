import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Data } from '../models/Data'
@Component({
    selector: "app-dashboard",
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    _data: Data[];
    constructor(private _service: CommonService) {

    }

    ngOnInit() {
        this._service.GetData().subscribe(res => this._data = res);
    }

}
