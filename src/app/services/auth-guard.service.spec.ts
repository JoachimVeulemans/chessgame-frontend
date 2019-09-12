import { TestBed, inject } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthGuardService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AuthGuardService, AuthService],
            imports: [HttpClientModule, RouterTestingModule, TranslateModule.forRoot({ loader: { provide: TranslateLoader, useClass: TranslateFakeLoader } })],
        });
    });

    it('should be created', inject([AuthGuardService], (service: AuthGuardService) => {
        expect(service).toBeTruthy();
    }));
});
