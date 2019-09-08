import { Chesspiece } from './chesspiece-abstract';

export class ChesspieceKnight extends Chesspiece {
    _icon = 'assets/images/chesspieces/knight';
    _name = 'Knight';
    _description = '';
    _color = '';

    constructor(color: string) {
        super();
        this._color = color;
        this._icon = this._icon + '_' + this._color + '.png';
    }
}
