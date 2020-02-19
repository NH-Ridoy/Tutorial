var obj = {};

var obj1 = new Object;

console.log(obj);
console.log(obj1);


var book = {
    name: 'Javascript Functional',
    author: 'Michel Fogus',
    puhlisher: 'O\'Really',
    page: 250,

    print:function() {
        console.log(this.name , this.author);
    }
}
book.print();

console.log(book);

book.publishYear = 2010;
book['price'] = 500;

console.log(book);


for(var props in book) {
    console.log(props + ' = ' + book[props]);
}