
function sayName(name){
    return  'Hello ' + name;
}

// A function can be stored in a variable

var hello = sayName;

var annotherHello = hello;

console.log(annotherHello('NH Ridoy'));


// A function can be stored in an array

var arr = [1,2,3,sayName('Mahmud Hasan Mahim')];

arr.push(sayName('Shafin'));

for(var i=0; i <= arr.length; i++){
    console.log(arr[i]);
}

// A function can be stored as an object or property


var people = {

        name: 'Hm Nayeem',
        na: 'sayName()',
        print: function(){
          return this;
        }

}

console.log(people);

// we can create function as needed

var sum = 10 + function(){return 30}();

console.log(sum);

// we can pass a function as an argument

function wow(name,my){
    return my(name);
}

var result = wow('akib',sayName);

console.log(result);

// we can return function from annother function

function base(l){

    return function(s){

        var result = 1;

        for(var i =1; i <= l; i++){
            result*=s;
        }

        return result;


    }
}

var res = base(2);

var you = res(5);

console.log(you);


console.log('For github test');
















