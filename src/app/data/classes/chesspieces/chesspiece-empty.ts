import { Chesspiece } from './chesspiece-abstract';

export class ChesspieceEmpty extends Chesspiece {
    _icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
    _name = 'Empty';
    _description = 'j';
    _color = null;

    constructor() {
        super();
    }
}
