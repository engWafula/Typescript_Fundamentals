"use strict";
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("finally", +i);
}
doSomething();
let count;
count = 8;
var colors;
(function (colors) {
    colors[colors["red"] = 0] = "red";
    colors[colors["blue"] = 1] = "blue";
    colors[colors["green"] = 2] = "green";
})(colors || (colors = {}));
console.log(colors.green);
//asertions
let message;
message = "ahddjdeoen";
const b = message.indexOf("a");
const c = message.endsWith("n");
console.log(b, c);
//custome types
class Point {
    //making the parameters  optional in his constructor is by ading a qestion mark
    //   constructor(x?:number,y?:number){
    //      this.x=1
    //      this.y=2
    //   }
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        console.log("X:" + this.x, "Y:" + this.y);
    }
    distanceBtn(another) {
    }
}
let point = new Point(70, 30);
//here am changing the values of x and y to 90 and  70 respectively
// point.x=90;
//  point.y=70
point.draw();
