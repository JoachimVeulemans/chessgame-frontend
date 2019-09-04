import { Component } from '@angular/core';
import { FadeAnimation } from './data/animations/fade';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [FadeAnimation]
})
export class AppComponent {
    constructor() { }

    getAnimationData(outlet: RouterOutlet) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    }
}
