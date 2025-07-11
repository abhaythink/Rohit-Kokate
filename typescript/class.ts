abstract class Animal {
    public name:string;
    constructor(name:string) {
        this.name=name;
    }
}
interface Ani{
    age:number;
    mobNo:number;
}

class cat extends Animal implements Ani {
    public age:number=22;
    public mobNo=12213;
    public constructor(name: string) {
        super(name);
    }
    public putData(): string {
        console.log(this.age);
        console.log(this.mobNo);
        return this.name;
    }
}

let obj1 = new cat("hello from Rohit");
console.log(obj1.putData());


// generic class

function generic<S,T>(name:S,age:T) {
    return  [name,age];
}

let a=generic<string,number>("rohit",22);
console.log(a);

class Person<T=string,S=number>{
    private _value: S | undefined;
    private _name: T |undefined;
    public setValue(value:S,name:T){
        this._value=value;
        this._name=name;
    }
    public getValue(){
        return [this._value,this._name];
    }
}
let obj2=new Person();
obj2.setValue(1332,"Hello");
console.log(obj2.getValue());








