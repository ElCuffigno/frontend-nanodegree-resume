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

//$("#main").append(funThoughts);

//append/replace/prepend practice
var name = "Thomas Elliott";
var role = "Communications Specialist";
var contactSkype = "elliott.tj - Skype";
var blog = "http://www.teamcelliott.com";
var pic = "http://www.teamcelliott.com/wp-content/uploads/2014/12/flyingbirdhead.jpg";
var welcome = "Check out my CV";


var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);

// arrays
var skills =
["awesomeness", "skill3", "skill4"];
console.log(skills.length);


// objects
var formattedContact = HTMLcontactGeneric.replace("%data%", contactSkype);
var formattedPic = HTMLbioPic.replace("%data%", pic);
var formattedWelcome = HTMLWelcomeMsg.replace("%data%", welcome);
var formattedBlog = HTMLblog.replace("%data%", blog);

var bio = {
  "name" : formattedName,
  "role" : formattedRole,
  "contact" : contactSkype,
  "blog" : blog,
  "picture" : pic,
  "welcome" : welcome,
  "skills" : skills
};

$("#header").prepend(bio.name);
$("#header").prepend(bio.role);
$("#topContacts").prepend(bio.contact);
$("#topContacts").prepend(bio.blog);
$("#topContacts").prepend(bio.welcome);
