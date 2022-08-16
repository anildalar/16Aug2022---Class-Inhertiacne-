//Type of inheritance
//1 . Single Inheritance

class A{
    //1. Properties

    //2. Constructor
    constructor(){
        console.log('Hello from a constructor');
    }

    //3. Methods
    aMethod(){
        console.log('Hello from amethod');
    }

}
class B extends A{
    //1. Properties
    
    //2. Constructor
    constructor(){
        super(); // super method will call parent constructor
        //Constructor is used to initialize the properties
        console.log("Hello from b constructor"); 
    }
    //3. Methods
    bMethod(){
        console.log('Hello from bmethod');
    }
}

//Lets create the object of the class

//let object = new ClassName();

//At the time you create an external object the constructor will be called automatically
let obj = new B();

//1. object.properties
//2. object.method();
obj.bMethod()    // . = member selection operator
obj.aMethod();