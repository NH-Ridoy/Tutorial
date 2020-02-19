var arr = [5, 9, 1, 2, 3, 4, 5, 10, 20];

var newArr = [];

for(var i=0; i < arr.length; i++) {
    newArr.push((arr[i]+2));
    console.log(newArr[i]);
}

var output = arr.map(function(value){
    return value+2;
});

console.log(output);


// my new map function  create

function newMap(arr,callback) {
    var newArr = [];
    for(var i=0; i < arr.length; i++) {
            newArr.push(callback(arr[i]));
    }
    return newArr;
}


var output = newMap(arr, function(ele) {
    return ele+2;
});

console.log(output);
