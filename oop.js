// // Write a class called Unicorn
// // it should have a dynamic name property
// // it should have a color property, that is silver by default
// // it should have a method called "say" that returns whatever string is passed in, with "*~*" at the beginning and end of the string
class Unicorn {
  constructor(name){
    this.name = name;
    this.color = "silver";
  }
  say(name) {
    this.name = `*~* ${name} *~*`;
  }
}
var unicorn1 = new Unicorn("Sally");
console.log(unicorn1);

unicorn1.say("Sally");
console.log(unicorn1);

// // Write a class called Vampire
// // it should have a dynamic name property
// // it should have a pet property, that is a bat, by default BUT it could be dynamic if info is passed in initially
// // it should have a thirsty property, that is true by default
// // it should have a drink method. When called, the thirsty property changes to false
//
class Vampire {
  constructor(name, pet) {
    this.name = name;
    this.pet = "bat";
    this.thirsty = true;
  }
  changePet(pet) {
    this.pet = pet;
  }
  drink(thirsty) {
    this.thirsty = false;
  }
}

var dracula = new Vampire("Dracula");
console.log(dracula);

dracula.changePet("snake");
console.log(dracula);

var elanor = new Vampire("Elanor", "snake");
console.log(elanor);

elanor.drink();
console.log(elanor);



//  Write a Dragon class
// it should have a dynamic name property (string)
//  it should have a dynamic rider property (string)
//  it should have a dynamic color property (string)
//  it should have a isHungry property that is true by default
//  it should have a eat method. If the dragon eats 4 times, it is no longer hungry
  // HINT: This requires you to use your knowledge from the conditionals lesson

// Had to give up on this one but feel like I am close to figuring out how to make this eat method work!
class Dragon {
  constructor(name, rider, color, isHungry = true) {
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hasEaten = 0;
    this.isHungry = isHungry;
  }

  eat() {
    this.hasEaten = this.hasEaten + 1;
    if (this.hasEaten > 3) {
      this.isHungry = false
    }
  }
}

var dragon1 = new Dragon("Sadie", "Joe", "Purple");
console.log(dragon1);


var dragon2 = new Dragon("Anastasia", "Dave", "pink");
console.log(dragon2);

dragon2.eat()
dragon2.eat()
dragon2.eat()
dragon2.eat()
console.log(dragon2)


//  BIG CHALLNEGE: Write a Hobbit class
//  it should have a dynamic name property (string)
//  it should have a dynamic disposition property (string)
//  it should have an age property that defaults to 0
//  it should have a celebrateBirthday method. When called, the age increases by 1
//  it should have an isAdult property (boolean) that is false by default. once a Hobbit is 33, it should be an adult
//  it should have an isOld property that defaults to false. once a Hobbit is 101, it is old.
//  it should have a hasRing property. If the Hobbit's name is "Frodo", true, if not, false.

class Hobbit {
  constructor(name, dispo, age = 0, isAdult = false, isOld = false, hasRing = false) {
    this.name = name;
    this.dispo = dispo;
    this.age = age;
    this.isAdult = isAdult;
    if (age >= 33) {
      this.isAdult = true}
    this.isOld = isOld;
    if (age >= 101) {
      this.isOld = true}
    this.hasRing = hasRing;
    if (name === "Frodo") {
      this.hasRing = true
    }
  }
  celebrateBirthday(age, isAdult, isOld) {
    this.age = this.age +1;
    this.isAdult = isAdult;
    if (age >= 33) {
      this.isAdult = true}
    this.isOld = isOld;
    if (age >= 101) {
      this.isOld = true}
  }
}
var hobbit1 = new Hobbit("Steve", "mad", 60);
console.log(hobbit1);

var hobbit2 = new Hobbit("Frodo", "happy", 25);
console.log(hobbit2);

var hobbit3 = new Hobbit("Gandolf", "serious", 347)
console.log(hobbit3);

var hobbit4 = new Hobbit("Jeff", "mean", 32)
console.log(hobbit4);

hobbit1.celebrateBirthday()
console.log(hobbit1);

hobbit4.celebrateBirthday()
console.log(hobbit4);
