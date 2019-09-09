import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private _backend_url = environment.backend_url;
    private optionsWithoutCredentials = { };
    private optionsWithCredentials = { withCredentials: true };
    private optionsWithJSON = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: true };

    constructor(private http: HttpClient) { }

    getChessboard(): Observable<string[]> {
        const url = `${this._backend_url}/chess`;

        return this.http.get<string[]>(url, this.optionsWithoutCredentials);
    }
}
