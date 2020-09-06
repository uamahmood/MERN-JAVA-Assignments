class Ninja {
    constructor(name,health,speed,strengh){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`Hello my name is ${this.name}`);
    }

    showStats(){
        console.log(`Name: ${this.name}\nSpeed: ${this.speed}\nStrength: 
          ${this.strength}\nHealth: ${this.health}`);
    }
    drinkSake(){
        this.health += 10;
    }
}
const ninja1 = new Ninja("hyabusa", 100,3,3);
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();