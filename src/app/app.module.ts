import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileNotFoundComponent } from './standard-components/file-not-found/file-not-found.component';
import { ChessboardComponent } from './standard-components/chessboard/chessboard.component';
import { ChesspieceComponent } from './standard-components/chesspiece/chesspiece.component';
import { LoadingIconComponent } from './standard-components/loading-icon/loading-icon.component';
import { StandardComponentsModule } from './standard-components/standard-components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StandardComponentsModule,
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [

    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
