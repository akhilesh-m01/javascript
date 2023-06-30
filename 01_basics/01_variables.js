const accountId = 1549;
let accountName = "Akhilesh";
var accountMail = "akhil@google.com"
accountCity = "Hyd";
let accountCountry;

// accountId = 020; // not allowed since it is constant

/*
prefer not to use "var"
because of issue in functional and block scope
*/

accountName = "akhil";
accountMail = "a@apple.com";
accountCity = "fairfax";

console.table([accountId,accountName,accountMail,accountCity,accountCountry]);