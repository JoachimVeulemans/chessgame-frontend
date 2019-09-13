import { Injectable, isDevMode } from '@angular/core';
import { ApiService } from './api.service';
import { TranslateService } from '@ngx-translate/core';
import { User } from '../data/classes/User';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    constructor(private translate: TranslateService, private apiService: ApiService) { }

    getLanguages() {
        let languages = ['browser', 'en', 'nl', 'fr'];

        // Only add 'Developer language' when in development
        if (isDevMode()) {
            languages = languages.concat('test');
        }

        return languages;
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
