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

// revision
// Difference between const, let and var interms of scope and reassigning

// 1. const - it is block scoped and can't be changed once assigned but we can change it when we use it with objects and arrays
// 2. let - it is block scoped and can be modified
// 3. var - it is function scoped because there are issues using this