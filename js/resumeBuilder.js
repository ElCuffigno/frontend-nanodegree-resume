//$("#main").append("Thomas Elliott");

//variables
var awesomeThoughts = "I am Tom and I am AWESOME!";

console.log(awesomeThoughts);

//test the replace function
var email ="tj@tjelliott.com";
var newEmail = email.replace("tjelliott","gmail");
console.log(email);
console.log(newEmail);

//replace practice


var funThoughts = awesomeThoughts.replace("AWESOME", "FUN!");
console.log(funThoughts);

$("#main").append(funThoughts);

//append/replace/prepend practice
var name = "Thomas Elliott";
var role = "Communications Specialist";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedName);
$("#header").append(formattedRole);
