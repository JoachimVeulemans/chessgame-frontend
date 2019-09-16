import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { User } from 'src/app/data/classes/User';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    usernameAvailable = false;

    constructor(private authService: AuthService, private router: Router, private apiService: ApiService, private http: HttpClient, public translate: TranslateService) {
        const sub = this.authService.checkLoggedIn().subscribe((value) => {
            if (value) {
                sub.unsubscribe();
                this.router.navigate(['/']);
            }
        });

    }

    login(username: string, password: string): void {
        if (username === '') {
            console.log('Je gebruikersnaam mag niet leeg zijn.');
            return;
        }
        if (password === '') {
            console.log('Je wachtwoord mag niet leeg zijn.');
            return;
        }
        this.apiService.getUserSalt(username).subscribe((salt) => {
            this.apiService.login(username, password, salt).subscribe((value) => {
                if (value) {
                    this.apiService.loggedin().subscribe((loggedin) => {
                        if (loggedin) {
                            this.authService.checkLoggedIn();
                            location.reload();
                        } else {
                            console.log('Je wachtwoord is niet correct.');
                        }
                    }, () => {
                        console.log('We konden niet controleren of je ingelogd was.');
                    });
                } else {
                    console.log('Je opgegeven wachtwoord is niet correct!');
                }
            }, () => {
                console.log('We konden jou niet inloggen.');
            });
        }, () => {
            // SALT NIET OPHAALBAAR -> USER BESTAAT NIET
            console.log('We konden geen account met deze gebruikersnaam terug vinden.');
        });
    }

    registerModalRequested(username: string): void {
        (<HTMLButtonElement>document.getElementById('usernameR')).value = username;
        this.checkUsername((<HTMLButtonElement>document.getElementById('registerButton')), username);
    }

    checkUsername(registerButton: HTMLButtonElement, username: string): void {
        this.apiService.checkIfUsernameAvailable(username).subscribe((value) => {
            if (value) {
                // GREEN LIGHT
                this.usernameAvailable = true;
                registerButton.disabled = false;

            } else {
                this.usernameAvailable = false;
                registerButton.disabled = true;
            }
        }, () => {
            this.usernameAvailable = false;
            registerButton.disabled = true;
            console.log('We konden jouw username niet op duplicaten controleren.');
        });
    }

    registerComplete(username: string, email: string, password: string, passwordNotSend: string) {
        if (username === '') {
            console.log('Je gebruikersnaam mag niet leeg zijn.');
            return;
        }
        if (email === '') {
            console.log('Je email mag niet leeg zijn.');
            return;
        }
        if (password === '' || passwordNotSend === '') {
            console.log('Je wachtwoord mag niet leeg zijn.');
            return;
        }
        if (password !== passwordNotSend) {
            console.log('Je wachtwoorden zijn niet hetzelde.');
            return;
        }

        this.apiService.getNewSalt().subscribe((salt) => {
            const user = new User('', username, '', '', email, '', password, salt, '');

            this.apiService.createUser(user).subscribe(() => {
                console.log('Je bent succesvol geregistreerd!');
                $('#register').modal('hide');
            }, () => {
                console.log('We konden jou niet registreren.');
            });
        }, () => {
            console.log('We konden jouw salt niet ophalen.');
        });
    }
}
