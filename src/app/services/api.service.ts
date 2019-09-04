import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chessboard } from '../data/classes/chessboard';
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

    getChessboard(): Observable<Chessboard> {
        const url = `${this._backend_url}/chess`;

        return this.http.get<Chessboard>(url, this.optionsWithoutCredentials);
    }
}
