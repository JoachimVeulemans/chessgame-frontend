import { HttpClient, HttpHandler } from '@angular/common/http';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { LanguageService } from './language.service';
import { TestBed } from '@angular/core/testing';

describe('LanguageService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [HttpClient, HttpHandler],
        imports: [TranslateModule.forRoot({ loader: { provide: TranslateLoader, useClass: TranslateFakeLoader } })]
    }));

    it('should be created', () => {
        const service: LanguageService = TestBed.get(LanguageService);

        expect(service).toBeTruthy();
    });
});
