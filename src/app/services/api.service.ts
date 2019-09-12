import * as shajs from 'sha.js';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Game } from '../data/classes/Game';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../data/classes/User';
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

    /**
     * GENERAL
     */

    login(username: string, password: string, salt: string): Observable<Boolean> {
        const url = `${this._backend_url}/login`;

        password = shajs('sha256').update(password + salt).digest('hex');
        const body = {
            username: username,
            password: password
        };

        return this.http.post<Boolean>(url, body, this._optionsWithCredentials);
    }

    getNewSalt(): Observable<string> {
        const url = `${this._backend_url}/salt`;

        return this.http.get<string>(url, this._optionsWithCredentials);
    }

    getUserSalt(username: string): Observable<string> {
        const url = `${this._backend_url}/salt/${username}`;

        return this.http.get<string>(url, this._optionsWithCredentials);
    }

    loggedin(): Observable<Boolean> {
        const url = `${this._backend_url}/loggedin`;

        return this.http.get<Boolean>(url, this._optionsWithCredentials);
    }

    logout(): Observable<Boolean> {
        const url = `${this._backend_url}/logout`;

        return this.http.post<Boolean>(url, {}, this._optionsWithCredentials);
    }

    checkIfUsernameAvailable(username: string): Observable<Boolean> {
        const url = `${this._backend_url}/checkusername/${username}`;

        return this.http.get<Boolean>(url, this._optionsWithCredentials);
    }

    /**
     * USER
     */

    getAllUsers(): Observable<User[]> {
        const url = `${this._backend_url}/users`;

        return this.http.get<User[]>(url, this._optionsWithoutCredentials);
    }

    getUser(id: string): Observable<User> {
        const url = `${this._backend_url}/users/${id}`;

        return this.http.get<User>(url, this._optionsWithoutCredentials);
    }

    getUserMe(): Observable<User> {
        const url = `${this._backend_url}/users/me`;

        return this.http.get<User>(url, this._optionsWithoutCredentials);
    }

    createUser(user: User): Observable<User> {
        user.password = shajs('sha256').update(user.password + user.salt).digest('hex');
        const url = `${this._backend_url}/users`;

        return this.http.post<User>(url, user, this._optionsWithCredentials);
    }

    editUser(user: User) {
        const url = `${this._backend_url}/users/${user.id}`;

        return this.http.put(url, user, this._optionsWithCredentials);
    }

    editUserPassword(user: User) {
        user.password = shajs('sha256').update(user.password + user.salt).digest('hex');
        const url = `${this._backend_url}/users/${user.id}`;
        const body = {
            id: user.id,
            password: user.password
        }

        return this.http.put(url, body, this._optionsWithCredentials);
    }

    deleteUser(user: User) {
        const url = `${this._backend_url}/users/${user.id}`;

        return this.http.delete(url, this._optionsWithCredentials);
    }

    /**
     * Games
     */

    getAllGames(): Observable<Game[]> {
        const url = `${this._backend_url}/games`;

        return this.http.get<Game[]>(url, this._optionsWithoutCredentials);
    }

    getMyGames(): Observable<Game[]> {
        const url = `${this._backend_url}/games/me`;

        return this.http.get<Game[]>(url, this._optionsWithoutCredentials);
    }

    getGame(id: string): Observable<Game> {
        const url = `${this._backend_url}/games/${id}`;

        return this.http.get<Game>(url, this._optionsWithoutCredentials);
    }

    deleteGame(game: Game) {
        const url = `${this._backend_url}/games/${game.id}`;

        return this.http.delete(url, this._optionsWithCredentials);
    }

    /**
     * CHESSBOARD
     */

    /** Returns the chessboard's chesspieces in correct order */
    getChessboard(): Observable<string[]> {
        const url = `${this._backend_url}/chess`;

        return this.http.get<string[]>(url, this._optionsWithoutCredentials);
    }
}
