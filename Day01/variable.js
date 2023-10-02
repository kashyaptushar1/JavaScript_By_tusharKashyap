{var a = 1;
let b = 2;
const c = '3'; 
console.log(a);
console.log(b);
console.log(c);
}
var a = 5;// var can be redeclare and reassign. 
// let, const cannot be redeclared or reassigned but they are block scoped so it is not possible to access them outside the scope of their declaration
console.log(a);
// let b = 6; can't redeclare but can reassign 
b = 9;
console.log(b);

{
    console.log(a)
    console.log(b)
    console.log(c)
}
