import { Chesspiece } from './chesspiece-abstract';

export class ChesspieceQueen extends Chesspiece {
    _icon = 'assets/images/chesspieces/queen';
    _name = 'Queen';
    _description = '';
    _color = '';

    constructor(color: string) {
        super();
        this._color = color;
        this._icon = this._icon + '_' + this._color + '.png';
    }
}
