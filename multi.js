class A{
    //1. Properties
    x=10;

    //2. Constructor


    //3. Method
}

class B extends A{
    //1. Properties
    y=20;

    //2. Constructor


    //3. Method

}

class C extends B{
    //1. Properties
    z=30;

    //2. Constructor


    //3. Method
}

let obj = new C();

console.log(obj.x + obj.y + obj.z)