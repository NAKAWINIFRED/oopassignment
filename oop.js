// Encapsulation
//  It is the bundling of data and methods that operate on that data within a single unit, typically a class.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Information Hiding:
// Encapsulation helps in hiding the internal state of the object from the outside world. which is also known as information hiding.
// ATTRIBUTES
// Private: Attributes and methods not accessible outside the class.
// Protected: Attributes and methods accessible within the class and its subclasses.
// Public: Attributes and methods accessible from outside the class.
// EXAMPLE
var Person = /** @class */ (function () {
    function Person(name, age) {
        this._name = name;
        this._age = age;
    }
    Object.defineProperty(Person.prototype, "name", {
        // Getter for name
        get: function () {
            return this._name;
        },
        // Setter for name
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        // Getter for age
        get: function () {
            return this._age;
        },
        // Setter for age
        set: function (age) {
            if (age > 0) {
                this._age = age;
            }
            else {
                throw new Error("Invalid age");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
// Usage
var person = new Person("John", 30);
console.log(person.name); // Output: John
person.age = 31;
console.log(person.age); // Output: 31
// Inheritance
// Inheritance is a mechanism in OOP where one class can inherit attributes and methods from another class.
// Single Level Inheritance:
// A single class inherits from one base class.
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.speak = function () {
        throw new Error("Method not implemented.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.speak = function () {
        return "Woof!";
    };
    return Dog;
}(Animal));
var dog = new Dog();
console.log(dog.speak()); // Output: Woof!
// Multilevel Inheritance:
// A class inherits from a derived class, forming a chain
// EXAMPLE
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.speak = function () {
        throw new Error("Method not implemented.");
    };
    return Car;
}());
var Vehicle = /** @class */ (function (_super) {
    __extends(Vehicle, _super);
    function Vehicle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Vehicle.prototype.hasTires = function () {
        return true;
    };
    return Vehicle;
}(Car));
var Audi = /** @class */ (function (_super) {
    __extends(Audi, _super);
    function Audi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Audi.prototype.speak = function () {
        return "Voom!";
    };
    return Audi;
}(Vehicle));
var adui = new Audi();
console.log(adui.speak()); // Output: voom!
console.log(adui.hasTires()); // Output: true
// Hierarchical Inheritance
// Multiple classes inherit from a single base class
// EXAMPLE
var Fish = /** @class */ (function () {
    function Fish() {
    }
    Fish.prototype.speak = function () {
        throw new Error("Method not implemented.");
    };
    return Fish;
}());
var Goldfish = /** @class */ (function (_super) {
    __extends(Goldfish, _super);
    function Goldfish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Goldfish.prototype.speak = function () {
        return "float";
    };
    return Goldfish;
}(Fish));
var Catfish = /** @class */ (function (_super) {
    __extends(Catfish, _super);
    function Catfish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Catfish.prototype.speak = function () {
        return "swiming";
    };
    return Catfish;
}(Fish));
var goldfish = new Goldfish();
var catfish = new Catfish();
console.log(goldfish.speak()); // Output: float!
console.log(catfish.speak()); // Output: swiming!
// Abstraction
// Introduction:
// Abstraction is the concept of hiding the complex implementation details and showing only the essential features of the object.
// Data Abstraction:
// Focusing on the essential qualities of an object rather than the specific details.
// Method Abstraction:
// Using methods to hide the details of implementation.
var Drinks = /** @class */ (function () {
    function Drinks() {
    }
    return Drinks;
}());
var Softdrinks = /** @class */ (function (_super) {
    __extends(Softdrinks, _super);
    function Softdrinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Softdrinks.prototype.speak = function () {
        return "sweet!";
    };
    return Softdrinks;
}(Drinks));
var Water = /** @class */ (function (_super) {
    __extends(Water, _super);
    function Water() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Water.prototype.speak = function () {
        return "Tasteless!";
    };
    return Water;
}(Drinks));
var softdrink = new Softdrinks();
var water = new Water();
console.log(softdrink.speak()); // Output: Woof!
console.log(water.speak()); // Output: Meow!
// Polymorphism
//  allows objects of different classes to be treated as objects of a common superclass. we can achieve this through method overloading and method overriding.
// Method Overloading:
// Defining multiple methods with the same name but different parameters.
// TypeScript supports method overloading through the use of multiple function signatures.
var Math = /** @class */ (function () {
    function Math() {
    }
    Math.prototype.add = function (a, b, c) {
        if (c !== undefined) {
            return a + b + c;
        }
        return a + b;
    };
    return Math;
}());
var math = new Math();
console.log(math.add(1, 2)); // Output: 3
console.log(math.add(1, 2, 3)); // Output: 6
// Method Overriding Example
var Sports = /** @class */ (function () {
    function Sports() {
    }
    Sports.prototype.speak = function () {
        throw new Error("Method not implemented.");
    };
    return Sports;
}());
var Ball = /** @class */ (function (_super) {
    __extends(Ball, _super);
    function Ball() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ball.prototype.speak = function () {
        return "bouce";
    };
    return Ball;
}(Sports));
var Rope = /** @class */ (function (_super) {
    __extends(Rope, _super);
    function Rope() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rope.prototype.speak = function () {
        return "jump!";
    };
    return Rope;
}(Sports));
var sports = [new Ball(), new Rope()];
sports.forEach(function (sports) { return console.log(sports.speak()); });
// Has-A Relationships
// Dependency
// When a class uses/needs another class.
var Engine = /** @class */ (function () {
    function Engine() {
    }
    Engine.prototype.start = function () {
        return "Engine started";
    };
    return Engine;
}());
var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.start = function () {
        return this.engine.start();
    };
    return Car;
}());
var engine = new Engine();
var car = new Car(engine);
console.log(car.start()); // Output: Engine started
var Engine = /** @class */ (function () {
    function Engine() {
    }
    Engine.prototype.start = function () {
        return "Engine started";
    };
    return Engine;
}());
// Composition
// When a class is composed of other classes; if the container object is destroyed, so are the contained objects.
var House = /** @class */ (function () {
    function House() {
        this.roof = new roof(); // Composition
    }
    House.prototype.start = function () {
        return this.roof.start();
    };
    return House;
}());
var roof = new Roof();
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
console.log(car.start()); // Output: Engine started
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
var Driver = /** @class */ (function () {
    function Driver(name) {
        this.name = name;
    }
    return Driver;
}());
var Bike = /** @class */ (function () {
    function Bike(model) {
        this.model = model;
    }
    return Bike;
}());
var driver = new Driver("John");
var bike = new Bike("Yamaha");
// 3. GRASP Principles
// Low Coupling
// Reduces dependencies between classes.
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.log = function (message) {
        console.log(message);
    };
    return Logger;
}());
var User = /** @class */ (function () {
    function User(logger) {
        this.logger = logger;
    }
    User.prototype.create = function () {
        this.logger.log("User created");
    };
    return User;
}());
var logger = new Logger();
var user = new User(logger);
user.create(); // Output: User created
// High Cohesion Example:
var OrderProcessor = /** @class */ (function () {
    function OrderProcessor() {
    }
    OrderProcessor.prototype.processOrder = function (order) {
        // High cohesion: this class only processes orders
        console.log("Processing order: ".concat(order));
    };
    return OrderProcessor;
}());
var orderProcessor = new OrderProcessor();
orderProcessor.processOrder("Order #1"); // Output: Processing order: Order #1
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
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Shape));
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}(Shape));
var shapes = [new Rectangle(2, 3), new Circle(5)];
shapes.forEach(function (shape) { return console.log(shape.area()); });
// Liskov Substitution Principle Example:
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.fly = function () {
        throw new Error("Method not implemented.");
    };
    return Bird;
}());
var Sparrow = /** @class */ (function (_super) {
    __extends(Sparrow, _super);
    function Sparrow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sparrow.prototype.fly = function () {
        return "Sparrow flying";
    };
    return Sparrow;
}(Bird));
var Ostrich = /** @class */ (function (_super) {
    __extends(Ostrich, _super);
    function Ostrich() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ostrich.prototype.fly = function () {
        return "Ostrich can't fly";
    };
    return Ostrich;
}(Bird));
function makeBirdFly(bird) {
    console.log(bird.fly());
}
makeBirdFly(new Sparrow()); // Output: Sparrow flying
makeBirdFly(new Ostrich()); // Output: Ostrich can't fly
var MultiFunctionPrinter = /** @class */ (function () {
    function MultiFunctionPrinter() {
    }
    MultiFunctionPrinter.prototype.print = function () {
        console.log("Printing document");
    };
    MultiFunctionPrinter.prototype.scan = function () {
        console.log("Scanning document");
    };
    return MultiFunctionPrinter;
}());
var mfp = new MultiFunctionPrinter();
mfp.print(); // Output: Printing document
mfp.scan(); // Output: Scanning document
var FileDataAccess = /** @class */ (function () {
    function FileDataAccess() {
    }
    FileDataAccess.prototype.read = function () {
        return "Data from file";
    };
    return FileDataAccess;
}());
var DatabaseDataAccess = /** @class */ (function () {
    function DatabaseDataAccess() {
    }
    DatabaseDataAccess.prototype.read = function () {
        return "Data from database";
    };
    return DatabaseDataAccess;
}());
var DataProcessor = /** @class */ (function () {
    function DataProcessor(dataAccess) {
        this.dataAccess = dataAccess;
    }
    DataProcessor.prototype.process = function () {
        var data = this.dataAccess.read();
        console.log("Processing ".concat(data));
    };
    return DataProcessor;
}());
var fileAccess = new FileDataAccess();
var dbAccess = new DatabaseDataAccess();
