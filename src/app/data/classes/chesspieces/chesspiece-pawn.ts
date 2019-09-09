import { Chesspiece } from './chesspiece-abstract';

export class ChesspiecePawn extends Chesspiece {
    _icon = 'assets/images/chesspieces/pawn';
    _name = 'Pawn';
    _description = 'oh';
    _color = '';

    constructor(color: string) {
        super();
        this._color = color;
        this._icon = this._icon + '_' + this._color + '.png';
    }
}
