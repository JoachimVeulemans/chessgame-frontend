import { Chesspiece } from './chesspiece-abstract';

export class ChesspieceKing extends Chesspiece {
    _icon = 'assets/images/chesspieces/king';
    _name = 'King';
    _description = 'oh';
    _color = '';

    constructor(color: string) {
        super();
        this._color = color;
        this._icon = this._icon + '_' + this._color + '.png';
    }
}
