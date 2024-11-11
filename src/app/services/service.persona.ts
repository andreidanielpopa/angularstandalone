import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()

export class ServicePersonas {
    constructor(private _http: HttpClient) { }

    getPersonas(): Observable<any> {
        let url = 'https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas';

        return this._http.get(url);
    }

    getPersonasPromesa(): Promise<any> {
        let url = 'https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas';
        let promise = new Promise((resolve) => {
            this._http.get(url).subscribe(response => {
                resolve(response);
            })
        })

        return promise;
    }
}