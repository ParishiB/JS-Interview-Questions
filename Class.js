class Animal {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  describe() {
    console.log("This is the name of the animal: " + this.name);
  }  
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name, breed); 
  }

  describe() {
    super.describe(); 
    console.log("It is a dog");
  }
}

const newDog = new Dog("Suzie", "Labrador");
newDog.describe();
