import { Component, Input, OnInit } from '@angular/core';
import { Chesspiece } from 'src/app/data/classes/chesspieces/chesspiece-abstract';
import { ChesspieceKing } from 'src/app/data/classes/chesspieces/chesspiece-king';
import { ChesspieceEmpty } from 'src/app/data/classes/chesspieces/chesspiece-empty';
import { ChesspieceQueen } from 'src/app/data/classes/chesspieces/chesspiece-queen';
import { ChesspieceRook } from 'src/app/data/classes/chesspieces/chesspiece-rook';
import { ChesspieceBishop } from 'src/app/data/classes/chesspieces/chesspiece-bishop';
import { ChesspieceKnight } from 'src/app/data/classes/chesspieces/chesspiece-knight';
import { ChesspiecePawn } from 'src/app/data/classes/chesspieces/chesspiece-pawn';

@Component({
    selector: 'app-chesspiece',
    templateUrl: './chesspiece.component.html',
    styleUrls: ['./chesspiece.component.scss']
})
export class ChesspieceComponent implements OnInit {

    @Input() chesspieceType: string;
    @Input() row: number;
    @Input() column: number;
    public chesspiece: Chesspiece;

    constructor() { }

    ngOnInit() {
        this.setChesspieceFromString();
    }

    private setChesspieceFromString() {
        const color = this.getColor();

        switch (this.chesspieceType) {
            case 'king':
                this.chesspiece = new ChesspieceKing(color);
                break;
            case 'queen':
                this.chesspiece = new ChesspieceQueen(color);
                break;
            case 'rook':
                this.chesspiece = new ChesspieceRook(color);
                break;
            case 'bishop':
                this.chesspiece = new ChesspieceBishop(color);
                break;
            case 'knight':
                this.chesspiece = new ChesspieceKnight(color);
                break;
            case 'pawn':
                this.chesspiece = new ChesspiecePawn(color);
                break;
            default:
                this.chesspiece = new ChesspieceEmpty();
        }


    }

    private getColor() {
        let color = 'white';

        if (this.row < 4) {
            color = 'black';
        }

        return color;
    }
}
