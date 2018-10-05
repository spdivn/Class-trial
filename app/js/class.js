//Class Example

class Animal{
    constructor(name){
        this.name = name
    }
    speak(){
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal{
    constructor(name){
        super(name);
    }
    speak(){
        super.speak();
        console.log(`${this.name} barks.`);
    }
}

const animal = new Animal('Panda');
animal.speak();

const dog = new Dog('Fuffy');
dog.speak();