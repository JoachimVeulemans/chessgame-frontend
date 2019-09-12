import { Injectable, isDevMode } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from './language.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

    /** constructor */
    constructor(private languageService: LanguageService, private http: HttpClient, private apiService: ApiService) {
        if (!isDevMode()) {
            console.log('Interested in developing? Check out out GitHub: https://github.com/JoachimVeulemans/chessgame-frontend');
        }
    }

    /** Method to see if the user is logged in */
    checkLoggedIn(): Observable<boolean> {
        this.languageService.setBrowserLanguage();

        return new Observable<boolean>((observer) => {
            this.apiService.loggedin().subscribe((value) => {
                if (value) {
                    observer.next(true);
                    this.languageService.checkLanguage();
                } else {
                    observer.next(false);
                }
            }, () => {
                observer.next(false);
            });
        });
    }
}
