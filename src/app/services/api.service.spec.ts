import { HttpClient, HttpHandler } from '@angular/common/http';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ApiService } from './api.service';
import { AppComponent } from '../app.component';
import { FeatherPipe } from '../pipes/feather/feather.pipe';
import { NavbarComponent } from '../standard-components/navbar/navbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';

describe('ApiService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        declarations: [AppComponent, NavbarComponent, FeatherPipe],
        imports: [RouterTestingModule, TranslateModule.forRoot({ loader: { provide: TranslateLoader, useClass: TranslateFakeLoader } })],
        providers: [HttpClient, HttpHandler]
    }));

    it('should be created', () => {
        const service: ApiService = TestBed.get(ApiService);

        expect(service).toBeTruthy();
    });
});
