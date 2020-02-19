var arr = [5, 9, 1, 2, 3, 4, 5, 10, 20];

// console.log(arr);

// var newArr = [];

// for(var i=0; i <= arr.length; i++) {

//     if((arr[i]%2) != 0) {
//         newArr.push(arr[i]);
//     }

// }

// console.log(newArr);


// var newArr = arr.filter(function(ele) {

//     return ele%2 != 0;

// });

// console.log(newArr);


function fill(arr,callback) {

    var newArr = [];
    var bool = true;

    for(var i=0; i <= arr.length; i++) {

       if(callback(arr[i])){

            newArr.push(arr[i]);
       }

    }

    return newArr;
}

 var output = fill(arr,function(element) {
    return element%2 != 0;
});

console.log('New Array : ' + output);



