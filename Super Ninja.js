class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`This Ninja's name is ${this.name} !`);
    }
    showStats() {
        console.log(`${this.name}'s health is ${this.health}, speed is ${this.speed}, strength is ${this.strength}.`)
    }
    drinkSake() {
        this.health += 10;
        console.log(`${this.name} gained 10 health. New health is ${this.health}`)
        return "'Here is a super duper wise message after I drank sake~'"
    }
}
class Sensei extends Ninja {
    constructor(name) {
        super(name); 
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom() {
        var wisemessage = super.drinkSake();
        console.log(wisemessage);
    }
}



var sensei = new Sensei("Sensei");
sensei.speakWisdom();
sensei.showStats();