export class MyPoint {
    constructor(private readonly id: string, private _x?: number, private _y?: number) {
    } // Typescript automatically declareds and fills parameters with same name if given an access modifier (private)
    public describe () {
        console.log(`x: ${this._x}, y: ${this._y}`);
    }
    public set x (value) {
        this._x = value;
    }
    public get x () {
        if (this._x) { // check if undefined
            return this._x;
        } return;
    }
}