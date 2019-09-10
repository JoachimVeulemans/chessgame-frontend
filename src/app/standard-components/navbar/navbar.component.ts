import { Component, OnInit } from '@angular/core';
import { FeatherPipe } from 'src/app/pipes/feather/feather.pipe';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    constructor(private router: Router, public feather: FeatherPipe) { }

    ngOnInit() {
    }

    navigate(route: string): void {
        this.router.navigate([route]);
    }
}
