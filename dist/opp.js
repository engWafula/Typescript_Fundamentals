"use strict";
class Points {
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
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    setX(value) {
        if (value < 0) {
            throw new Error("VALUE CANNOT BE LESS THAN ZERO");
        }
        this.x = value;
    }
}
let points = new Points(70, 30);
console.log(points.getX());
points.setX(-2);
points.draw();
