import { Component, OnInit } from '@angular/core';

/** Defines the selector and location of the HTML & SCSS */
@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    /** Constructor */
    constructor() { }

    /** Defines what should be done next when the component is created */
    ngOnInit() { }
}
