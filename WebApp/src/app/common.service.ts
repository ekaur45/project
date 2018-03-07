import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http'
import { Data } from './models/Data'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/Rx'

@Injectable()
export class CommonService {
    constructor(private http: Http) { }
    GetData():any{
        return this.http.get('http://localhost:7712/src/assets/Data.json').map(res => {
            res.json()
        });
    }
}
