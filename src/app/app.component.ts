import { Component } from '@angular/core';
import { FadeAnimation } from './data/animations/fade';
import { LanguageService } from './services/language.service';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

/** Defines the selector, the location of the HTML & SCSS and which animations to use */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [FadeAnimation]
})
export class AppComponent {
    /** Constructor */
    constructor(private translate: TranslateService, private language: LanguageService) {
        this.language.checkLanguage();
    }

    /** Defines when the animation should be triggered */
    getAnimationData(outlet: RouterOutlet) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    }
}
