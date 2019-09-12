import { Component, OnInit } from '@angular/core';

/** Defines the selector and location of the HTML & SCSS */
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    /** Constructor */
    constructor() { }

    /** Defines what should be done next when the component is created */
    ngOnInit() { }
}
