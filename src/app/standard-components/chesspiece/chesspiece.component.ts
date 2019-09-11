import { Component, Input, OnInit } from '@angular/core';
import { Chesspiece } from 'src/app/data/classes/chesspieces/chesspiece-abstract';
import { ChesspieceBishop } from 'src/app/data/classes/chesspieces/chesspiece-bishop';
import { ChesspieceEmpty } from 'src/app/data/classes/chesspieces/chesspiece-empty';
import { ChesspieceKing } from 'src/app/data/classes/chesspieces/chesspiece-king';
import { ChesspieceKnight } from 'src/app/data/classes/chesspieces/chesspiece-knight';
import { ChesspiecePawn } from 'src/app/data/classes/chesspieces/chesspiece-pawn';
import { ChesspieceQueen } from 'src/app/data/classes/chesspieces/chesspiece-queen';
import { ChesspieceRook } from 'src/app/data/classes/chesspieces/chesspiece-rook';

/** Defines the selector and location of the HTML & SCSS */
@Component({
    selector: 'app-chesspiece',
    templateUrl: './chesspiece.component.html',
    styleUrls: ['./chesspiece.component.scss']
})
export class ChesspieceComponent implements OnInit {
    /** Variable that holds the type of chesspiece (name) */
    @Input() chesspieceType: string;
    /** Variable that holds the row of the chesspiece */
    @Input() row: number;
    /** Variable that holds the column of the chesspiece */
    @Input() column: number;
    /** Variable that holds the chesspiece object */
    public chesspiece: Chesspiece;

    /** Constructor */
    constructor() { }

    /** Defines what should be done next when the component is created */
    ngOnInit() {
        this.setChesspieceFromString();
    }

    /** Creates a chesspiece object based on the provided type */
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

    /** Calculate the color of the chesspiece based on the location (row & column) */
    private getColor() {
        let color = 'white';

        if (this.row < 4) {
            color = 'black';
        }

        return color;
    }
}
