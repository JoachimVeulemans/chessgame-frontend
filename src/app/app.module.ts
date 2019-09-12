import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PipesModule } from './pipes/pipes.module';
import { StandardComponentsModule } from './standard-components/standard-components.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageService } from './services/language.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

/**
 * Required function for Translation (i18n)
 * @param http HttpClient
 */
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [LanguageService, AuthService, AuthGuardService],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StandardComponentsModule,
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        PipesModule.forRoot(),
        TranslateModule.forRoot({ loader: { provide: TranslateLoader, useFactory: HttpLoaderFactory, deps: [HttpClient] } })
    ]
})
export class AppModule { }
