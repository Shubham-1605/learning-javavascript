const accountId = 5061; //const =  variable cannot be re-declared or updated.
let accountEmail = "shubham1605dj@gmail.com"; //let = variable cannot be re-declared but can be updated
var accountpassword = "50615061"; //var = vaibale can be re-declared and canbe updated.a global scope varaible
/*
prefer not to use var
because of issue in block scope and functional scope
*/
accountcity = "kolkata"; //js accept varaible without any datatype but we should not use it.
let accountstate; //if no value is assigned then it will show undefined.
console.log(accountcity);
console.table([
  accountId,
  accountEmail,
  accountpassword,
  accountcity,
  accountstate,
]);

//alert(3+3) //we are usinig nodejs,not browser

//number => 2 to power 52
//bigint
//string => "hello"
//bollean => true/false
//null => standalone value
//undefined =>
//symbol = unique
console.log(typeof undefined); //undefined
console.log(typeof null); //object
/*
In JavaScript, the typeof null returns "object", which is actually a bug in the language that has never been fixed for backward compatibility reasons.
*/
console.log(typeof "shubham"); //typeof show the datatype of value.
