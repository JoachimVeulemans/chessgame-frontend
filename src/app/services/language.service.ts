import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { User } from '../data/classes/User';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    constructor(private translate: TranslateService, private apiService: ApiService) { }

    getLanguages() {
        return ['browser', 'en', 'nl', 'fr'];
    }

    checkLanguage(): void {
        this.apiService.getUserMe().subscribe((user: User) => {
            this.switchLanguage(user.language);
        }, () => {
            this.setBrowserLanguage();
        });
    }

    switchLanguage(language: string): void {
        this.translate.use(language);
    }

    setBrowserLanguage(): void {
        for (let language of Object.keys(navigator.languages)) {
            language = navigator.languages[language].toLowerCase();

            if (['nl', 'nl-be', 'nl-nl'].indexOf(language) !== -1) {
                this.translate.use('nl');
                break;
            }
            if (['fr', 'fr-be', 'fr-ca', 'fr-fr', 'fr-lu', 'fr-mc', 'fr-ch'].indexOf(language) !== -1) {
                this.translate.use('fr');
                break;
            }

            // Default
            this.translate.use('en');
        }
    }
}
