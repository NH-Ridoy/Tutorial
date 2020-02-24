function Animal(name) {
    this.name = name;
}

Animal.prototype.printName = function() {
    console.log(this.name);
}


function myKey(construc) {
    var obj = {};
    
    Object.setPrototypeOf(obj, construc.prototype);
    
    var argsArray = Array.prototype.slice.apply(arguments);
    construc.apply(obj, argsArray.slice(1));
    return obj;

}

var cat = myKey(Animal, 'Tanvir Hasan');

cat.printName();

var Person = function(name) {
    this.name = name;
}

var res = myKey(Person, "Imran Hossain");
