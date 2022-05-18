"use strict";
let id = 5;
let Name = 'Wafula';
let isPublished = true;
let age = 23;
let x = 'wafula';
let ids = [1, 2, 3, 4, 4];
let arr = [1, 2, "wafula"];
ids.push(4);
arr.push(10.8);
//tupple
let person = ['wafula', 23, true];
//tupple array
let employee;
employee = [
    [1, 'wafula'],
    [2, 'Allan'],
];
//Unions
let Id;
Id = 'wafula';
Id = 5;
//enums
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Right"] = 1] = "Right";
    Direction1[Direction1["Up"] = 2] = "Up";
    Direction1[Direction1["Down"] = 3] = "Down";
    Direction1[Direction1["Left"] = 4] = "Left";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: 'Wafula'
};
//type Assertion
let cid = 1;
let customerId = cid;
//Or it can be written as customerId=cid as number
//Types in functions
function add(a, b) {
    return a + b;
}
//log
function log(message) {
    console.log(message);
}
//console.log(add(1,8))
log('wafula');
const users = {
    id: 1,
    name: 'Wafula'
};
const p1 = 20;
const p2 = 'wafula';
const Add = (a, b) => a + b;
const subtract = (a, b) => a - b;
class Person {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    register() {
        return `${this.name} is registered`;
    }
}
class Employee extends Person {
    constructor(name, id, department) {
        super(name, id);
        this.department = department;
    }
    register() {
        return `${this.name} is registered and works in ${this.department}`;
    }
}
const brad = new Person("Wafula", 1);
const emp = new Employee("Wafula", 1, "IT");
//emp.register()
//brad.register()
//Generics
function getArray(item) {
    return new Array().concat(item);
}
let numArray = getArray([1, 6, 9, 7]);
let stArray = getArray(['wafula', "allan", "isaac"]);
numArray.push(90);
numArray.pop();
console.log(numArray);
