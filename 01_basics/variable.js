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