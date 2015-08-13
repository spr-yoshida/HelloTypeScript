class MyClass {
    public age:number;
    public name:string;

    constructor(age:number,name:string){
        this.age = age;
        this.name = name;
    }

    public getName():string{
        return "My name is " + this.name + ".";
    }

    public getAge():string{
        return "I'm " + this.age.toString() + ".";
    }
}

function Hello(){
    var h = new MyClass(18,"Bob");
    var resName = h.getName();
    var resAge = h.getAge();
    alert(resName + resAge);
}
