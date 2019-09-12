import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

/** Defines the selector and location of the HTML & SCSS */
@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    /** Constructor */
    constructor(private apiService: ApiService) { }

    /** Defines what should be done next when the component is created */
    ngOnInit() { }

    saveProfile(firstname: string, lastname: string, email: string, bio: string, language: string) {
        console.log(firstname + lastname + email + bio + language);
    }

    savePassword(password: string, password2: string) {
        console.log(password + password2);
    }

    deleteAccount() {
        console.log('delete account requested');
    }

    private setProfileButtonsStateNormal() {

    }

    private setProfileButtonsStateSaving() {

    }

    private setProfileButtonsStateSuccess() {

    }

    private setProfileButtonsStateError() {

    }

    private setPasswordButtonsStateNormal() {

    }

    private setPasswordButtonsStateSaving() {

    }

    private setPasswordButtonsStateSuccess() {

    }

    private setPasswordButtonsStateError() {

    }

    private setDeleteAccountButtonsStateNormal() {

    }

    private setDeleteAccountButtonsStateDeleting() {

    }

    private setDeleteAccountButtonsStateSuccess() {

    }

    private setDeleteAccountButtonsStateError() {

    }


}
