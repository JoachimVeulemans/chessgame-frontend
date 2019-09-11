import { Component } from '@angular/core';
import { FeatherPipe } from 'src/app/pipes/feather/feather.pipe';
import { Router } from '@angular/router';

/** Defines the selector and location of the HTML & SCSS */
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    /** Constructor
     * @param feather allows icons to be parsed in HTML
    */
    constructor(private router: Router, public feather: FeatherPipe) { }

    /** Navigates to the desired route with the Angular build-in router */
    navigate(route: string): void {
        this.router.navigate([route]);
    }
}
