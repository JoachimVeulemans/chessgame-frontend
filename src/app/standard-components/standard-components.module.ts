import { ChessboardComponent } from './chessboard/chessboard.component';
import { ChesspieceComponent } from './chesspiece/chesspiece.component';
import { CommonModule } from '@angular/common';
import { FileNotFoundComponent } from './file-not-found/file-not-found.component';
import { LoadingIconComponent } from './loading-icon/loading-icon.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { PipesModule } from '../pipes/pipes.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [
        ChessboardComponent,
        ChesspieceComponent,
        FileNotFoundComponent,
        LoadingIconComponent,
        NavbarComponent
    ],
    imports: [
        CommonModule,
        PipesModule.forRoot(),
        TranslateModule
    ],
    exports: [
        ChessboardComponent,
        ChesspieceComponent,
        FileNotFoundComponent,
        LoadingIconComponent,
        NavbarComponent,
        PipesModule,
        TranslateModule
    ]
})
export class StandardComponentsModule { }
