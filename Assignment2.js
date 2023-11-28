/* 1 */

for(let i=0;i<=100;i++){
if(i%2 == 0){
  console.log(i);
}
} 

/*  2  */

let n1 = 30, n2 = 50;
/* let n1 = parseInt(prompt("Provide the first value"));
let n2  = parseInt(prompt("Provide the second value")); */
/* let operator = prompt("Provide the operator"); */
operator = '+';
switch(operator){
case '+':
console.log(sum(n1,n2));
break;
case '-':
console.log(sub(n1,n2));
break;
case '*':
console.log(mul(n1,n2));
break;
case '/':
console.log(div(n1,n2));
break;

default:
console.log('Provide correct operator');
break;
}

function sum(a,b){
return a+b;
}
function sub(a,b){
return a-b;
}
function mul(a,b){
return a*b;
}
function div(a,b){
return a/b;
}

/*  3  */
const salary = 2500000;
findTax(salary);
function findTax(salary){
	if(salary > 0 && salary <= 500000){
  	console.log("The tax amount of the person is: 0")
  }
  else if(salary > 500000 && salary <= 1000000){
console.log("The tax amount of the person is: "+(salary/10))}
else if(salary > 1000000 && salary <= 1500000){
console.log("The tax amount of the person is: "+(salary/5))}
else{
	console.log("The tax amount of the person is: "+(salary * 0.3));
}
}


/*  4  */
let n3 = 6;
let n4 = 34;
let sum1 = 0;
while(n3 > 0 || n4 > 0){
	sum1 += ((n3%10) * (n4%10));
  n3 = Math.floor(n3 / 10);
  n4 = Math.floor(n4 / 10);
}
console.log("fuck");
