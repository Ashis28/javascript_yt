const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPwd = "12345";
acountCity  = "Jaipur"
let accountState

//const keyword doesnot allow to change the variable further 
accountEmail = "ashis@.com"
accountCity = "Banglore"

console.log(accountId)

console.table([accountId,accountEmail,accountPwd,accountCity,accountState])

/*initial days js dont word on the basic of scopes 
 some one inside a loop use accountPwd  then it changes the 1st accountPwd of line 2
 or because issue in block scope and functional scope
let removed the problem of scope */