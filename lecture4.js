function  personName(firstName,lastName,male) {
    var output;

    if(male === 'male'){
        output = 'Mr.' + firstName + ' ' + lastName; 
    }else if(male === 'female') {
        output = 'Ms.' + firstName + ' ' + lastName;
    }
    return output;
}

var fullName = personName('None','Anika','female');
console.log(fullName);


function example () {
    return {
        name: 'Ridoy',
        
        skill: ['java','javascript'],
        print: function () {
            console.log(this.name,this.skill);
    
        }
    }
}

var obj = example();
console.log(obj.print());


console.log('Hi only for github');
