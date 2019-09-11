import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

/** This service can be used to perform API calls */
@Injectable({
    providedIn: 'root'
})
export class ApiService {
    /** Variable that contains the URL to the backend */
    private _backend_url = environment.backend_url;
    /** Variable that contains the URL to the ai */
    private _ai_url = environment.ai_url;

    /** Variable that contains the options without credentials */
    private _optionsWithoutCredentials = { };
    /** Variable that contains the options with credentials */
    private _optionsWithCredentials = { withCredentials: true };
    /** Variable that contains the options with JSON */
    private _optionsWithJSON = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: true };

    /** Constructor */
    constructor(private http: HttpClient) { }

    /** Returns the chessboard's chesspieces in correct order */
    getChessboard(): Observable<string[]> {
        const url = `${this._backend_url}/chess`;

        return this.http.get<string[]>(url, this._optionsWithoutCredentials);
    }
}
