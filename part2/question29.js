class Person {
    constructor(name) {
        this.name = name;
        this.children = [];
        this.isAlive = true;
    }
}

class Monarchy {
    constructor(name) {
        this.monarch = new Person(name);
        //add suport for same names
        this.monarchs = {
            [this.monarch.name]: this.monarch
        }
    }

    birth(childName, parentName) {
        const child = new Person(childName);
        const parent = this.monarchs[parentName];
        parent.children.push(child);
        this.monarchs[childName] = child;
    }

    death(name) {
        this.monarchs[name].isAlive = false;
    }

    getOrderOfSuccession() {

        const succession = [];
        const stack = [this.monarch];
        while (stack.length) {
            let cur = stack.pop();
            if (cur.isAlive) succession.push(cur.name);
            if (cur.children) stack.push(...(cur.children).reverse());
        }
        return succession;

    }
}

const my_monarchy = new Monarchy("Jake");
my_monarchy.birth("Catherine", "Jake");
my_monarchy.birth("Tom", "Jake");
my_monarchy.birth("Celine", "Jake");
my_monarchy.birth("Jane", "Catherine");
my_monarchy.birth("Peter", "Celine");
my_monarchy.birth("Farah", "Jane");
my_monarchy.birth("Mark", "Catherine");
my_monarchy.death("Jake");
my_monarchy.death("Jane");
console.log(my_monarchy.getOrderOfSuccession())