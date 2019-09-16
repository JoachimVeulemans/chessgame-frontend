import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/** Defines the selector and location of the HTML & SCSS */
@Component({
    selector: 'app-play',
    templateUrl: './play.component.html',
    styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {
    /** Constructor */
    constructor(private router: Router) { }

    /** Defines what should be done next when the component is created */
    ngOnInit() { }

    /** Navigates to the desired route with the Angular build-in router */
    navigate(route: string): void {
        this.router.navigate([route]);
    }
}
