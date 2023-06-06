//reference type

var object1 = { value: 10};
var object2 = object1; //you are just storing the reference to object1
var object3 = { value: 10}; //this creates a new object
//changing the value of object1 changes object2 as well 


//context vs scope
//scope is created when there are {} for ex. function() { ...scope is here... }
//context is accessed by this keyword
const object4 = {
    a: function(){
        console.log(this) //this will now be func instead of window
    }
}

//instantiation
//when you make a copy of an object and reuse the code
//you make instances/copies of an object
class Player{
    constructor(name, type){
        this.name = name;
        this.type = type;
    }

    introduce(){
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player{
    constructor(name, type){
        console.log(this);
        super(name, type)
    }
    play(){
        console.log(`WEEEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');