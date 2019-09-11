import { Chesspiece } from './chesspiece-abstract';

/** Class representation of the 'queen' chesspiece */
export class ChesspieceQueen extends Chesspiece {
    /** Variable that contains the URL to the icon of the chesspiece */
    _icon = 'assets/images/chesspieces/queen';
    /** Variable that contains the name of the chesspiece */
    _name = 'Queen';
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
