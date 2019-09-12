import { Component, OnInit } from '@angular/core';

/** Defines the selector and location of the HTML & SCSS */
@Component({
    selector: 'app-loading-icon',
    templateUrl: './loading-icon.component.html',
    styleUrls: ['./loading-icon.component.scss']
})
export class LoadingIconComponent implements OnInit {
    /** Constructor */
    constructor() { }

    /** Defines what should be done next when the component is created */
    ngOnInit() {
        this.restartAnimation();
    }

    /** Restart the animation every 4s */
    private restartAnimation() {
        setInterval(() => { this.restartCSS() }, 4000);
    }

    /** Removes the old board & calls the reintroduce function after 0.1s */
    private restartCSS() {
        $('.pawnpiece').removeClass('pawnimate');
        $('#wrapper').removeClass('restart-css');
        setTimeout(() => { this.reintroduce() }, 100);
    }

    /** Reintroduces the board */
    private reintroduce() {
        $('.pawnpiece').addClass('pawnimate');
        $('#wrapper').addClass('restart-css');
    }
}
