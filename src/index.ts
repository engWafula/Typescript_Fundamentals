

let id:number  = 5
let Name:string='Wafula'
let isPublished:boolean = true

let age:number = 23

let x:any = 'wafula'
let ids:number[]=[1,2,3,4,4]

let arr:any[]=[1,2,"wafula"]

ids.push(4)

arr.push(10.8)

//tupple
let person:[string,number,boolean] = ['wafula',23,true]


//tupple array
let employee:[number,string][]
employee = [
    [1,'wafula'],
    [2,'Allan'],
]

//Unions
let Id:string|number 
Id = 'wafula'
Id = 5


//enums
enum Direction1{
    Right=1,
    Up,
    Down,
    Left,
   

}


//Objects
type User ={
    name:string,
    id:number,
}

const user:User={
    id:1,
    name:'Wafula'
}

//type Assertion
let cid:any=1

let customerId=<number>cid
 //Or it can be written as customerId=cid as number

 //Types in functions
 function add(a:number,b:number):number{
    return a+b
 }

 //log
 function log(message:string | number):void{
    console.log(message)
 }
console.log(add(1,8))
log('wafula')

//Interfaces

interface userInterface{
    readonly name:string,//we cant change this
    id:number,
    age?:number,
}

const users:userInterface={
    id:1,
    name:'Wafula'
}


type point =number|string

const p1:point=20
const p2:point='wafula'


//using interfaces with functions

interface mapFunc{
    (a:number,b:number):number
}

const Add:mapFunc=(a:number,b:number):number=>a+b
const subtract:mapFunc=(a:number,b:number):number=>a-b

console.log(subtract(90,5))

//Classes
interface personInterface{
    name:string//we cant change this
    id:number
    register():string
}
class Person implements personInterface{
   name:string
    id:number
    constructor(name:string,id:number){
        this.name=name
        this.id=id
    }

    register(){
        return `${this.name} is registered`
    }
  
}

class Employee  extends Person{
    department:string
    constructor(name:string,id:number,department:string){
        super(name,id)
        this.department=department
    }
    register(){
        return `${this.name} is registered and works in ${this.department}`
    }
}

const brad = new Person("Wafula",1);
const emp =new Employee("Wafula",1,"IT")
emp.register()
brad.register()