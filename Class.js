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





class Todo {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.completed = false; 
  }


  markAsCompleted() {
    this.completed = true;
  }


  markAsIncomplete() {
    this.completed = false;
  }
  
  describe() {
    console.log(`Title: ${this.title}`);
    console.log(`Description: ${this.description}`);
    console.log(`Completed: ${this.completed ? 'Yes' : 'No'}`);
  }
}


const todo1 = new Todo("Learn JavaScript", "Complete a JavaScript tutorial");
const todo2 = new Todo("Write an article", "Write an article on JavaScript");


todo1.describe();
todo2.describe();


todo1.markAsCompleted();

console.log("\nAfter marking as completed:");
todo1.describe();
