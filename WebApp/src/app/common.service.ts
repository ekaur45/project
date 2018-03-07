import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Data } from './models/Data'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class CommonService {
    constructor(private http: HttpClient) { }
    GetData(): Observable<Data[]> {
        return this.http.get<Data[]>('http://localhost:7712/src/assets/Data.json').pipe(
            tap(heroes => console.error(`fetched heroes`))            
        );
    }
}
