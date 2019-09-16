import { AfterViewInit, Component } from '@angular/core';
import { FeatherPipe } from 'src/app/pipes/feather/feather.pipe';
import { LanguageService } from 'src/app/services/language.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

/** Defines the selector and location of the HTML & SCSS */
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {
    /** Constructor
     * @param feather allows icons to be parsed in HTML
    */
    constructor(private router: Router, public feather: FeatherPipe, public translate: TranslateService, private language: LanguageService) { }

    ngAfterViewInit() {
        this.checkIfTranslateReady();
    }

    /** Navigates to the desired route with the Angular build-in router */
    navigate(route: string): void {
        this.router.navigate([route]);
    }

    checkIfTranslateReady() {
        if (this.translate.instant('LANGUAGES.BROWSER') === 'LANGUAGES.BROWSER') {
            setTimeout(() => {
                this.checkIfTranslateReady();
            }, 250);
        } else {
            this.setLanguages(document.getElementById('languages'));
        }
    }

    private setLanguages(languageContainer: HTMLElement) {
        this.language.getLanguages().forEach((language) => {
            const element = document.createElement('a');

            element.classList.add('dropdown-item');
            element.id = language;
            element.innerText = this.translate.instant('LANGUAGES.' + language.toUpperCase());
            element.addEventListener('click', () => {
                this.switchLanguage(element.id);
            });

            languageContainer.appendChild(element);
        });
    }

    switchLanguage(language: string) {
        if (language === 'browser') {
            this.language.setBrowserLanguage();
        } else {
            this.language.switchLanguage(language);
        }

        this.reloadLanguages();
    }

    private reloadLanguages() {
        const languageContainer = document.getElementById('languages');

        while (languageContainer.firstChild) {
            languageContainer.removeChild(languageContainer.firstChild);
        }

        setTimeout(() => { this.setLanguages(languageContainer); }, 1000);
    }
}
