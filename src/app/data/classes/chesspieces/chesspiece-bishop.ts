import { Chesspiece } from './chesspiece-abstract';

export class ChesspieceBishop extends Chesspiece {
    _icon = 'assets/images/chesspieces/bishop';
    _name = 'Bishop';
    _description = '';
    _color = '';

    constructor(color: string) {
        super();
        this._color = color;
        this._icon = this._icon + '_' + this._color + '.png';
    }
}
