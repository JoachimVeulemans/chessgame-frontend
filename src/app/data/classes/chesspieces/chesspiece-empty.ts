import { Chesspiece } from './chesspiece-abstract';

/** Class representation of the 'empty' chesspiece */
export class ChesspieceEmpty extends Chesspiece {
    /** Variable that contains the URL to the icon of the chesspiece */
    _icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
    /** Variable that contains the name of the chesspiece */
    _name = 'Empty';
    /** Variable that contains the description of the chesspiece */
    _description = '';
    /** Variable that contains the color of the chesspiece */
    _color = null;

    /** Constructor */
    constructor() {
        super();
    }
}
