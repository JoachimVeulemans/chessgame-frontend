import { Component } from '@angular/core';
import { Router } from '@angular/router';

/** Defines the selector and location of the HTML & SCSS */
@Component({
    selector: 'app-file-not-found',
    templateUrl: './file-not-found.component.html',
    styleUrls: ['./file-not-found.component.scss']
})
export class FileNotFoundComponent {
    /** Constructor */
    constructor(private router: Router) { }

    /** Navigates to the desired route with the Angular build-in router */
    navigate(route: string): void {
        this.router.navigate([route]);
    }
}
