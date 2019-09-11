/** Class representation of an abstract chesspiece */
export abstract class Chesspiece {
    /** Variable that contains the name of the chesspiece */
    abstract _name: string;
    /** Variable that contains the URL to the icon of the chesspiece */
    abstract _icon: string;
    /** Variable that contains the description of the chesspiece */
    abstract _description: string;
    /** Variable that contains the color of the chesspiece */
    abstract _color: string;

    /** Contructor */
    constructor() { }
}
