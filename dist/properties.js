"use strict";
class Pointer {
    //You can change the access modifiers in the constructor method to any  eg public,private,protected
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        console.log("X:" + this.x, "Y:" + this.y);
    }
    distanceBtn(another) {
    }
    get X() {
        return this.x;
    }
    get Y() {
        return this.y;
    }
    set X(value) {
        if (value < 0) {
            throw new Error("VALUE CANNOT BE LESS THAN ZERO");
        }
        this.x = value;
    }
}
let pointer = new Pointer(70, 30);
console.log(pointer.X);
pointer.X = 100;
pointer.draw();
