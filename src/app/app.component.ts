import { Component } from '@angular/core';
import { FadeAnimation } from './data/animations/fade';
import { RouterOutlet } from '@angular/router';

/** Defines the selector, the location of the HTML & SCSS and which animations to use */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [FadeAnimation]
})
export class AppComponent {
    /** Constructor */
    constructor() { }

    /** Defines when the animation should be triggered */
    getAnimationData(outlet: RouterOutlet) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    }
}
