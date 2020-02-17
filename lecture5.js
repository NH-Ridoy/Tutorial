function demo(name) {
    print(name);
}

function print(args) {
    console.log('Hi,' + args);
}

demo('NH Ridoy');



print("Mahmud Hasan Mahim");


function greeting(name,print) {
    print(name);
}


greeting('NH Ridoy',function(arg){
    console.log('Hi ' + arg);
});


greeting('Imran Hossain',function(name){
    console.log('Hi,' + 'How are you ' + name + ' ?');
    console.log(name.length);
});

// for callback practice

var me = {
    name: 'NH Ridoy',
    age: 16,
    email: 'ridoyhossain5557@gmail.com'
}


function printMySelf(obj,callback) {
    console.log('Name: ' + obj.name + ' (' + obj.age + ')');
    if(obj.age >= 18) {
        callback(obj.email);
    }else{
        console.log('You are too tiny....');
    }
}


printMySelf(me,function(email) {
    console.log('Email sent to ' + email);
});


// another example for callback



function formServer(data,call1,call2) {
    console.log('Original data: ' + data);
    call1(data);
    call2(data);
}



formServer('Javascript is awesome language for intermediate level',function(data) {
    var uppercase = data.toUpperCase();
    console.log('ÚpperCase:' + uppercase);
},function(data) {
    var lowercase = data.toLowerCase();
    console.log('LowerCase: ' + lowercase);
    console.log(data.length);
});


