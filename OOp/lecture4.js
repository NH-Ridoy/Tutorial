var Person = {
    name: 'NH Ridoy',

    print: function() {
        console.log('Hello, ' + this.name);
    }
}


Person.print();

function myFunction(number) {
    return this.value + number;
}

var obj = {
    value: 10
}

var obj1 = {
    value:  20
}

var binded = myFunction.bind(obj);
var result = binded(15);
console.log(result);

var person = {
    name: 'NH Ridoy',

    print: function() {
        
        // var name = this.name;

        setTimeout(function(){
            console.log('Hello, ' + this.name);
        }.bind(this),2000);
       
    }
}

person.print();

