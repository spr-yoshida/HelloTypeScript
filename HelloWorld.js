var MyClass = (function () {
    function MyClass(age, name) {
        this.age = age;
        this.name = name;
    }
    MyClass.prototype.getName = function () {
        return "My name is " + this.name + ".";
    };
    MyClass.prototype.getAge = function () {
        return "I'm " + this.age.toString() + ".";
    };
    return MyClass;
})();
function Hello() {
    var h = new MyClass(18, "Bob");
    var resName = h.getName();
    var resAge = h.getAge();
    alert(resName + resAge);
}
