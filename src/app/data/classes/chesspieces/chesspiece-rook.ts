import { Chesspiece } from './chesspiece-abstract';

/** Class representation of the 'rook' chesspiece */
export class ChesspieceRook extends Chesspiece {
    /** Variable that contains the URL to the icon of the chesspiece */
    _icon = 'assets/images/chesspieces/rook';
    /** Variable that contains the name of the chesspiece */
    _name = 'Rook';
    /** Variable that contains the description of the chesspiece */
    _description = '';
    /** Variable that contains the color of the chesspiece */
    _color = '';

    /** Constructor which will set the color and the correct URL to the icon */
    constructor(color: string) {
        super();
        this._color = color;
        this._icon = this._icon + '_' + this._color + '.png';
    }
}
