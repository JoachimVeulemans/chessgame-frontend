import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChessboardComponent } from './chessboard/chessboard.component';
import { ChesspieceComponent } from './chesspiece/chesspiece.component';
import { FileNotFoundComponent } from './file-not-found/file-not-found.component';
import { LoadingIconComponent } from './loading-icon/loading-icon.component';

@NgModule({
    declarations: [
        ChessboardComponent,
        ChesspieceComponent,
        FileNotFoundComponent,
        LoadingIconComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ChessboardComponent,
        ChesspieceComponent,
        FileNotFoundComponent,
        LoadingIconComponent
    ]
})
export class StandardComponentsModule { }
