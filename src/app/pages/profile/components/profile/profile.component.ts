import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { User } from 'src/app/data/classes/User';

/** Defines the selector and location of the HTML & SCSS */
@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    user: User = new User('45654-52665-55519-98798-11213', 'Limoentaart', 'Joachim', 'Veulemans', 'joachim.veulemans@outlook.be', 'A driven developer', 'PASSWORDA1', 'PASSWORDA2', 'dutch');

    /** Constructor */
    constructor(private apiService: ApiService) { }

    /** Defines what should be done next when the component is created */
    ngOnInit() {
        this.getUser()
        this.resetAllButtons();
    }

    private getUser() {
        this.apiService.getUserMe().subscribe((value) => {
            this.user = value;
        }, () => {
            console.log(`couldn't get user`);
        });
    }

    saveProfile(username: string, firstname: string, lastname: string, email: string, bio: string, language: string,
        profileSave: HTMLButtonElement, profileSaving: HTMLButtonElement, profileSuccess: HTMLButtonElement, profileError: HTMLButtonElement) {
        this.setProfileButtonsStateSaving(profileSave, profileSaving, profileSuccess, profileError);
        this.user = this.user.editProfile(this.user, username, firstname, lastname, email, bio, language);
        this.apiService.editUser(this.user).subscribe(() => {
            console.log('Success!');
            this.setProfileButtonsStateSuccess(profileSave, profileSaving, profileSuccess, profileError);
            this.resetProfileButtonsAfterTime(profileSave, profileSaving, profileSuccess, profileError);
        }, () => {
            console.log('Error!');
            this.setProfileButtonsStateError(profileSave, profileSaving, profileSuccess, profileError);
            this.resetProfileButtonsAfterTime(profileSave, profileSaving, profileSuccess, profileError);
        });
    }

    savePassword(password: string, password2: string,
        passwordSave: HTMLButtonElement, passwordSaving: HTMLButtonElement, passwordSuccess: HTMLButtonElement, passwordError: HTMLButtonElement) {
        this.setPasswordButtonsStateSaving(passwordSave, passwordSaving, passwordSuccess, passwordError);
        if (password === password2) {
            this.user.password = password;
            this.apiService.editUserPassword(this.user).subscribe(() => {
                console.log('Password updated!');
                this.setPasswordButtonsStateSuccess(passwordSave, passwordSaving, passwordSuccess, passwordError);
                this.resetPasswordButtonsAfterTime(passwordSave, passwordSaving, passwordSuccess, passwordError);
            }, () => {
                console.log('Error updating password');
                this.setPasswordButtonsStateError(passwordSave, passwordSaving, passwordSuccess, passwordError);
                this.resetPasswordButtonsAfterTime(passwordSave, passwordSaving, passwordSuccess, passwordError);
            })
        } else {
            console.log('passwords not the same!');
            this.setPasswordButtonsStateError(passwordSave, passwordSaving, passwordSuccess, passwordError);
            this.resetPasswordButtonsAfterTime(passwordSave, passwordSaving, passwordSuccess, passwordError);
        }
    }

    deleteAccount(deleteAccountSave: HTMLButtonElement, deleteAccountDeleting: HTMLButtonElement, deleteAccountSuccess: HTMLButtonElement, deleteAccountError: HTMLButtonElement) {
        this.setDeleteAccountButtonsStateDeleting(deleteAccountSave, deleteAccountDeleting, deleteAccountSuccess, deleteAccountError);
        this.apiService.deleteUser(this.user).subscribe(() => {
            console.log('Success!')
            this.setDeleteAccountButtonsStateSuccess(deleteAccountSave, deleteAccountDeleting, deleteAccountSuccess, deleteAccountError);
            this.resetDeleteAccountButtonsAfterTime(deleteAccountSave, deleteAccountDeleting, deleteAccountSuccess, deleteAccountError);
        }, () => {
            console.log(`couldn't get user`);
            this.setDeleteAccountButtonsStateError(deleteAccountSave, deleteAccountDeleting, deleteAccountSuccess, deleteAccountError);
            this.resetDeleteAccountButtonsAfterTime(deleteAccountSave, deleteAccountDeleting, deleteAccountSuccess, deleteAccountError);
        });
    }

    private resetAllButtons() {
        const profileSave = document.getElementById('profileSaveButton') as HTMLButtonElement;
        const profileSaving = document.getElementById('profileSavingButton') as HTMLButtonElement;
        const profileSuccess = document.getElementById('profileSuccessButton') as HTMLButtonElement;
        const profileError = document.getElementById('profileErrorButton') as HTMLButtonElement;

        const passwordSave = document.getElementById('passwordSaveButton') as HTMLButtonElement;
        const passwordSaving = document.getElementById('passwordSavingButton') as HTMLButtonElement;
        const passwordSuccess = document.getElementById('passwordSuccessButton') as HTMLButtonElement;
        const passwordError = document.getElementById('passwordErrorButton') as HTMLButtonElement;

        const deleteAccountSave = document.getElementById('deleteAccountSaveButton') as HTMLButtonElement;
        const deleteAccountDeleting = document.getElementById('deleteAccountDeletingButton') as HTMLButtonElement;
        const deleteAccountSuccess = document.getElementById('deleteAccountSuccessButton') as HTMLButtonElement;
        const deleteAccountError = document.getElementById('deleteAccountErrorButton') as HTMLButtonElement;

        this.setProfileButtonsStateNormal(profileSave, profileSaving, profileSuccess, profileError);
        this.setPasswordButtonsStateNormal(passwordSave, passwordSaving, passwordSuccess, passwordError);
        this.setDeleteAccountButtonsStateNormal(deleteAccountSave, deleteAccountDeleting, deleteAccountSuccess, deleteAccountError);
    }

    private resetProfileButtonsAfterTime(profileSave: HTMLButtonElement, profileSaving: HTMLButtonElement, profileSuccess: HTMLButtonElement, profileError: HTMLButtonElement) {
        setTimeout(() => {
            this.setProfileButtonsStateNormal(profileSave, profileSaving, profileSuccess, profileError);
        }, 3000);
    }

    private resetPasswordButtonsAfterTime(passwordSave: HTMLButtonElement, passwordSaving: HTMLButtonElement, passwordSuccess: HTMLButtonElement, passwordError: HTMLButtonElement) {
        setTimeout(() => {
            this.setPasswordButtonsStateNormal(passwordSave, passwordSaving, passwordSuccess, passwordError);
        }, 3000);
    }

    private resetDeleteAccountButtonsAfterTime(deleteAccountSave: HTMLButtonElement, deleteAccountDeleting: HTMLButtonElement, deleteAccountSuccess: HTMLButtonElement, deleteAccountError: HTMLButtonElement) {
        setTimeout(() => {
            this.setDeleteAccountButtonsStateNormal(deleteAccountSave, deleteAccountDeleting, deleteAccountSuccess, deleteAccountError);
        }, 3000);
    }

    private setProfileButtonsStateNormal(profileSave: HTMLButtonElement, profileSaving: HTMLButtonElement, profileSuccess: HTMLButtonElement, profileError: HTMLButtonElement) {
        profileSave.style.display = 'block';
        profileSaving.style.display = 'none';
        profileSuccess.style.display = 'none';
        profileError.style.display = 'none';
    }

    private setProfileButtonsStateSaving(profileSave: HTMLButtonElement, profileSaving: HTMLButtonElement, profileSuccess: HTMLButtonElement, profileError: HTMLButtonElement) {
        profileSave.style.display = 'none';
        profileSaving.style.display = 'block';
        profileSuccess.style.display = 'none';
        profileError.style.display = 'none';
    }

    private setProfileButtonsStateSuccess(profileSave: HTMLButtonElement, profileSaving: HTMLButtonElement, profileSuccess: HTMLButtonElement, profileError: HTMLButtonElement) {
        profileSave.style.display = 'none';
        profileSaving.style.display = 'none';
        profileSuccess.style.display = 'block';
        profileError.style.display = 'none';
    }

    private setProfileButtonsStateError(profileSave: HTMLButtonElement, profileSaving: HTMLButtonElement, profileSuccess: HTMLButtonElement, profileError: HTMLButtonElement) {
        profileSave.style.display = 'none';
        profileSaving.style.display = 'none';
        profileSuccess.style.display = 'none';
        profileError.style.display = 'block';
    }

    private setPasswordButtonsStateNormal(passwordSave: HTMLButtonElement, passwordSaving: HTMLButtonElement, passwordSuccess: HTMLButtonElement, passwordError: HTMLButtonElement) {
        passwordSave.style.display = 'block';
        passwordSaving.style.display = 'none';
        passwordSuccess.style.display = 'none';
        passwordError.style.display = 'none';
    }

    private setPasswordButtonsStateSaving(passwordSave: HTMLButtonElement, passwordSaving: HTMLButtonElement, passwordSuccess: HTMLButtonElement, passwordError: HTMLButtonElement) {
        passwordSave.style.display = 'none';
        passwordSaving.style.display = 'block';
        passwordSuccess.style.display = 'none';
        passwordError.style.display = 'none';
    }

    private setPasswordButtonsStateSuccess(passwordSave: HTMLButtonElement, passwordSaving: HTMLButtonElement, passwordSuccess: HTMLButtonElement, passwordError: HTMLButtonElement) {
        passwordSave.style.display = 'none';
        passwordSaving.style.display = 'none';
        passwordSuccess.style.display = 'block';
        passwordError.style.display = 'none';
    }

    private setPasswordButtonsStateError(passwordSave: HTMLButtonElement, passwordSaving: HTMLButtonElement, passwordSuccess: HTMLButtonElement, passwordError: HTMLButtonElement) {
        passwordSave.style.display = 'none';
        passwordSaving.style.display = 'none';
        passwordSuccess.style.display = 'none';
        passwordError.style.display = 'block';
    }

    private setDeleteAccountButtonsStateNormal(deleteAccountSave: HTMLButtonElement, deleteAccountDeleting: HTMLButtonElement, deleteAccountSuccess: HTMLButtonElement, deleteAccountError: HTMLButtonElement) {
        deleteAccountSave.style.display = 'block';
        deleteAccountDeleting.style.display = 'none';
        deleteAccountSuccess.style.display = 'none';
        deleteAccountError.style.display = 'none';
    }

    private setDeleteAccountButtonsStateDeleting(deleteAccountSave: HTMLButtonElement, deleteAccountDeleting: HTMLButtonElement, deleteAccountSuccess: HTMLButtonElement, deleteAccountError: HTMLButtonElement) {
        deleteAccountSave.style.display = 'none';
        deleteAccountDeleting.style.display = 'block';
        deleteAccountSuccess.style.display = 'none';
        deleteAccountError.style.display = 'none';
    }

    private setDeleteAccountButtonsStateSuccess(deleteAccountSave: HTMLButtonElement, deleteAccountDeleting: HTMLButtonElement, deleteAccountSuccess: HTMLButtonElement, deleteAccountError: HTMLButtonElement) {
        deleteAccountSave.style.display = 'none';
        deleteAccountDeleting.style.display = 'none';
        deleteAccountSuccess.style.display = 'block';
        deleteAccountError.style.display = 'none';
    }

    private setDeleteAccountButtonsStateError(deleteAccountSave: HTMLButtonElement, deleteAccountDeleting: HTMLButtonElement, deleteAccountSuccess: HTMLButtonElement, deleteAccountError: HTMLButtonElement) {
        deleteAccountSave.style.display = 'none';
        deleteAccountDeleting.style.display = 'none';
        deleteAccountSuccess.style.display = 'none';
        deleteAccountError.style.display = 'block';
    }
}
