import { Chesspiece } from './chesspiece-abstract';

export class ChesspieceRook extends Chesspiece {
    _icon = 'assets/images/chesspieces/rook';
    _name = 'Rook';
    _description = '';
    _color = '';

    constructor(color: string) {
        super();
        this._color = color;
        this._icon = this._icon + '_' + this._color + '.png';
    }
}
