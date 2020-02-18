var arr = [69, 48, 47, 45, 1, 5, 10,70];

arr.sort(function(a,b){
    return b-a;
});

console.log(arr);



var objArr = [
    {name: 'NH Ridoy', age: 23},
    {name: 'Imran Hossain', age: 20},
    {name: 'Mahmud Hasan Mahim', age: 18},
    {name: 'Tanvir Hasan', age: 21}
];

objArr.sort(function(a,b) {
    return a.age - b.age;
});


objArr.sort(function(a,b){
    if(a.name > b.name){
        return 1;
    } else if(a.name < b.name){
        return -1;
    } else{
        return 1;
    }
});

console.log(objArr);



















