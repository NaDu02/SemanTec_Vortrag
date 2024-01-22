// execute with: npx ts-node src/experiments/pascals-stuff.ts
import { MyPoint } from './practice-module'

let betterThanVar: any; // var has full function scope; "any" is discouraged
let specialType: unknown; // safer alternative to "any" - to add a type later you need to cast it
let myAge: number = 19, male: boolean = true, favNums: number[] = [12, 24];
for (let favNum of favNums) {
    console.log(favNum);
}
function scopeTest(): void {
    for (var x = 0; x < 10; x++) {
        console.log(x);
    }
    for (let y = 0; y < 10; y++) {
    console.log(x);
    //console.log(y);
    }
}
const fname: string = "Pascal", placeOfBirth: string = "Trier"; // immutable
favNums.push(36);
let largerNumber: bigint, globalUniqueIdentifier: symbol;
// implicit assignment forces TS to "infer" the value
const tripleTuble: readonly [number, boolean, string] = [4, false, "na"]; // not mutable
type customName = [x: number, y: boolean]; // Alias & label elements for better documentation and readability
type Employee = { readonly id: number, name: string, retire: (date: Date) => void };
type IntersectionType = customName & Employee; // new type has properties and functions of both
type Metric = "cm" | "inch"; // Literal types
let firstLength: Metric = "cm";
const namedTuple: customName = [3, true];
enum Colours { Red = 0, Yellow = 1, Blue = 2 };
console.log("Blue value: " + Colours.Blue);
interface User { id: number; name: string; greet(): string; email?: string } // optional property at the end
type unionType = string | number; // value can be one of several types
let castingTest: unionType = 7; // cast with "as" not necessary here (type assertion)
if (typeof castingTest === "number") {}
let fnameLog = () => console.log(fname); // Arrow function
fnameLog();
function voidReturnWithDefault(greeting: string = "Hey!", name: string): void {
    console.log(`${greeting} ${name}!`); // backticks for template literals
}
function restParameters(num1: number, num2: number, ...rest: number[]) {
    return num1 + num2 + rest.reduce((a, b) => a + b, 0); // function and initialValue
}
// visibility: public (default), private & protected

let pointA = new MyPoint("1", 4, 5);
pointA.describe();
let Ax = pointA.x; // property
console.log("x-property: " + Ax);
interface Shape {
    getArea: () => number;
}
class Rectangle implements Shape {
    public constructor(protected width: number, protected height: number) {}
    public getArea(): number { return this.width * this.height; }
    public toString(): string { return `Rectangle: ${this.width} wide and ${this.height} high.`;}
}
class Square extends Rectangle {
    public constructor(width: number) { super(width, width); }
    public override toString(): string { return `Square: ${this.width} side-length.`; }
}
type Wrapped<T> = { value: T }; // can also have default value, inheritence etc.
const wrappedValue: Wrapped<number> = { value: 10 };
let rectPart: Partial<Rectangle> = {}; // Utlitlty types, Partial changes all properties to be optional
let carObject: { brand: string, maxSpeed: number } = { brand: "VW", maxSpeed: 210 };
carObject.maxSpeed += 5;

//Subscriptions in Angular vs. Promise