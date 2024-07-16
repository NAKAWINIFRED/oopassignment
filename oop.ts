// Encapsulation
//  It is the bundling of data and methods that operate on that data within a single unit, typically a class.

// Information Hiding:
// Encapsulation helps in hiding the internal state of the object from the outside world. which is also known as information hiding.

// ATTRIBUTES
// Private: Attributes and methods not accessible outside the class.
// Protected: Attributes and methods accessible within the class and its subclasses.
// Public: Attributes and methods accessible from outside the class.

// EXAMPLE

class Person {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    // Getter for name
    get name(): string {
        return this._name;
    }

    // Setter for name
    set name(name: string) {
        this._name = name;
    }

    // Getter for age
    get age(): number {
        return this._age;
    }

    // Setter for age
    set age(age: number) {
        if (age > 0) {
            this._age = age;
        } else {
            throw new Error("Invalid age");
        }
    }
}

// Usage
const person = new Person("John", 30);
console.log(person.name);  // Output: John
person.age = 31;
console.log(person.age);  // Output: 31

// Inheritance
// Inheritance is a mechanism in OOP where one class can inherit attributes and methods from another class.

// Single Level Inheritance:
// A single class inherits from one base class.

class Animal {
    speak(): string {
        throw new Error("Method not implemented.");
    }
}

class Dog extends Animal {
    speak(): string {
        return "Woof!";
    }
}

const dog = new Dog();
console.log(dog.speak());  // Output: Woof!

// Multilevel Inheritance:
// A class inherits from a derived class, forming a chain

// EXAMPLE

class Car {
    start: any;
    speak(): string {
        throw new Error("Method not implemented.");
    }
}

class Vehicle extends Car {
    hasTires(): boolean {
        return true;
    }
}

class Audi extends Vehicle {
    speak(): string {
        return "Voom!";
    }
}

const adui = new Audi();
console.log(adui.speak());  // Output: voom!
console.log(adui.hasTires());  // Output: true


// Hierarchical Inheritance
// Multiple classes inherit from a single base class

// EXAMPLE

class Fish {
    speak(): string {
        throw new Error("Method not implemented.");
    }
}

class Goldfish extends Fish {
    speak(): string {
        return "float";
    }
}

class Catfish extends Fish {
    speak(): string {
        return "swiming";
    }
}

const goldfish = new Goldfish();
const catfish = new Catfish();
console.log(goldfish.speak());  // Output: float!
console.log(catfish.speak());  // Output: swiming!


// Abstraction
// Introduction:
// Abstraction is the concept of hiding the complex implementation details and showing only the essential features of the object.

// Data Abstraction:
// Focusing on the essential qualities of an object rather than the specific details.

// Method Abstraction:
// Using methods to hide the details of implementation.


abstract class Drinks {
    abstract speak(): string;
}

class Softdrinks extends Drinks {
    speak(): string {
        return "sweet!";
    }
}

class Water extends Drinks {
    speak(): string {
        return "Tasteless!";
    }
}

const softdrink = new Softdrinks();
const water= new Water();
console.log(softdrink.speak());  // Output: Woof!
console.log(water.speak());  // Output: Meow!


// Polymorphism
//  allows objects of different classes to be treated as objects of a common superclass. we can achieve this through method overloading and method overriding.

// Method Overloading:
// Defining multiple methods with the same name but different parameters.

// TypeScript supports method overloading through the use of multiple function signatures.

class Math {
    add(a: number, b: number): number;
    add(a: number, b: number, c: number): number;
    add(a: number, b: number, c?: number): number {
        if (c !== undefined) {
            return a + b + c;
        }
        return a + b;
    }
}

const math = new Math();
console.log(math.add(1, 2));  // Output: 3
console.log(math.add(1, 2, 3));  // Output: 6


// Method Overriding Example

class Sports {
    speak(): string {
        throw new Error("Method not implemented.");
    }
}

class Ball extends Sports {
    speak(): string {
        return "bouce";
    }
}

class Rope extends Sports {
    speak(): string {
        return "jump!";
    }
}

const sports: Sports[] = [new Ball(), new Rope()];
sports.forEach(sports => console.log(sports.speak()));


// Has-A Relationships
// Dependency
// When a class uses/needs another class.

class Engine {
    start(): string {
        return "Engine started";
    }
}

class Car {
    private engine: Engine;

    constructor(engine: Engine) {
        this.engine = engine;
    }

    start(): string {
        return this.engine.start();
    }
}

const engine = new Engine();
const car = new Car(engine);
console.log(car.start());  // Output: Engine started





class Engine {
    start(): string {
        return "Engine started";
    }
}




// Composition
// When a class is composed of other classes; if the container object is destroyed, so are the contained objects.

class House {
    private roof: Roof;

    constructor() {
        this.roof = new roof();  // Composition
    }

    start(): string {
        return this.roof.start();
    }
}

const roof = new Roof();
console.log(car.start());  

// example 2

// class Engine {
//     start(): string {
//         return "Engine started";
//     }
// }

// class Car {
//     private engine: Engine;

//     constructor() {
//         this.engine = new Engine();  // Composition
//     }

//     start(): string {
//         return this.engine.start();
//     }
// }

// const car = new Car();
console.log(car.start());  // Output: Engine started


// Aggregation
// When a class contains another class, but the contained object can exist independently of the container object.


// class Engine {
//     start(): string {
//         return "Engine started";
//     }
// }

// class Car {
//     private engine: Engine;

//     constructor(engine: Engine) {
//         this.engine = engine;  // Aggregation
//     }

//     start(): string {
//         return this.engine.start();
//     }
// }

// const engine = new Engine();
// const car = new Car(engine);
// console.log(car.start());  



// Association
// When classes are related but can exist independently


class Driver {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Bike {
    model: string;

    constructor(model: string) {
        this.model = model;
    }
}

const driver = new Driver("John");
const bike = new Bike("Yamaha");


// 3. GRASP Principles
// Low Coupling
// Reduces dependencies between classes.

class Logger {
    log(message: string): void {
        console.log(message);
    }
}

class User {
    private logger: Logger;

    constructor(logger: Logger) {
        this.logger = logger;
    }

    create(): void {
        this.logger.log("User created");
    }
}

const logger = new Logger();
const user = new User(logger);
user.create();  // Output: User created


// High Cohesion Example:

class OrderProcessor {
    processOrder(order: string): void {
        // High cohesion: this class only processes orders
        console.log(`Processing order: ${order}`);
    }
}

const orderProcessor = new OrderProcessor();
orderProcessor.processOrder("Order #1");  // Output: Processing order: Order #1


// 4. SOLID Principles
// Single Responsibility Principle
// A class should have only one reason to change.

// class User {
//     name: string;

//     constructor(name: string) {
//         this.name = name;
//     }
// }

// class UserRepository {
//     save(user: User): void {
//         console.log(`User ${user.name} saved`);
//     }
// }

// const user = new User("John");
// const repo = new UserRepository();
// repo.save(user);  // Output: User John saved


// Open-Closed Principle Example


abstract class Shape {
    abstract area(): number;
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

const shapes: Shape[] = [new Rectangle(2, 3), new Circle(5)];
shapes.forEach(shape => console.log(shape.area()));

// Liskov Substitution Principle Example:


class Bird {
    fly(): string {
        throw new Error("Method not implemented.");
    }
}

class Sparrow extends Bird {
    fly(): string {
        return "Sparrow flying";
    }
}

class Ostrich extends Bird {
    fly(): string {
        return "Ostrich can't fly";
    }
}

function makeBirdFly(bird: Bird): void {
    console.log(bird.fly());
}

makeBirdFly(new Sparrow());  // Output: Sparrow flying
makeBirdFly(new Ostrich());  // Output: Ostrich can't fly


// Interface Segregation Principle Example

interface Printer {
    print(): void;
}

interface Scanner {
    scan(): void;
}

class MultiFunctionPrinter implements Printer, Scanner {
    print(): void {
        console.log("Printing document");
    }

    scan(): void {
        console.log("Scanning document");
    }
}

const mfp = new MultiFunctionPrinter();
mfp.print();  // Output: Printing document
mfp.scan();  // Output: Scanning document


// Dependency Inversion Principle Example

interface DataAccess {
    read(): string;
}

class FileDataAccess implements DataAccess {
    read(): string {
        return "Data from file";
    }
}

class DatabaseDataAccess implements DataAccess {
    read(): string {
        return "Data from database";
    }
}

class DataProcessor {
    private dataAccess: DataAccess;

    constructor(dataAccess: DataAccess) {
        this.dataAccess = dataAccess;
    }

    process(): void {
        const data = this.dataAccess.read();
        console.log(`Processing ${data}`);
    }
}

const fileAccess = new FileDataAccess();
const dbAccess = new DatabaseDataAccess();



