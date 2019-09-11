import { Component, OnInit } from '@angular/core';
import { FadeAnimation } from './data/animations/fade';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

/** Defines the selector, the location of the HTML & SCSS and which animations to use */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [FadeAnimation]
})
export class AppComponent implements OnInit {
    /** Constructor */
    constructor(private translate: TranslateService) { }

    ngOnInit() {
        this.translate.use('nl');
    }

    /** Defines when the animation should be triggered */
    getAnimationData(outlet: RouterOutlet) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    }
}
