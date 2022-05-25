function pavan(){
    document.write("Hello Pavan")
}
pavan()
pavan()
pavan()
pavan()

// functoion return and Passing
function myName(){
    document.getElementById("ok").innerHTML = "Code With Pavan"
} 
function mahesh(user){
    return"hello Bro"
}
let user = 'pavan'
let str = mahesh(user)
console.log(str)


// arrow Function 
let greet = (pavan) => {
    console.log("Hello "  + pavan);
    return 1;
}

console.log(greet('Pavan'))


// higher order funtion
//defination -  function recive a function  arggument  or return  funtion of output

const double = n => n * 2;

let num = [1, 2, 3, 4 ,5 ];

let result = num.map(double);

console.log(result);