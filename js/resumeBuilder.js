// JSON object
var education = {
  "schools": [
  {
    "name": "Wabash College",
    "city": "Crawfordsville, Indiana",
    "degree": "Bachelor of Arts",
    "major": ["English", "Religion"],
    "grad" : 2008
  },
  {
    "name": "Northwestern University",
    "city": "Evanston, Illinois",
    "degree": "Master of Science",
    "major": "Journalism",
    "grad" : 2009
  }
],
 "onlineCourses": [
 {
   "title" : "Front End JavaScript",
   "URL" : "http://udacity.com"
 },
 {
   "title" : "Front End HTML",
   "URL" : "http://udacity.com"
 }
 ]
};

//Final JSON objects
var work = {
  "jobs": [
{
  "employer": "EPS",
  "title": "Communications Specialist",
  "location": "South Bend, Indiana",
  "dates" : "2009-2012, 2014-2015",
  "description" : "Managed online marketing for Engineering Firm."

},
{
  "employer": "MSABI",
  "title": "Communications and IT Manager",
  "location": "Ifakara, Morogoro Region, Tanzania",
  "dates" : "2014-2015",
  "description" : "Established office server and managed online marketing for WASH NGO."
},
{
  "employer": "Claretian Publications/St. Jude League",
  "title": "Editorial Production Assistant",
  "location": "Chicago, Illinois",
  "dates" : "2010-2014",
  "description" : "Wrote, edited, and facilitated production of driect mail campaigns"
    }
  ]
};

//projects object
var projects = {
  "projects": [
{
  "title": "Personal Blog",
  "dates" : "2014-present",
  "description" : "Blogged about life in Kibaoni, Tanzania.",
  "images": [
    "http://www.teamcelliott.com/wp-content/uploads/2015/01/HotSauceList-1024x576.jpg",
    "http://www.teamcelliott.com/wp-content/uploads/2015/01/20150102_132438-1024x576.jpg",
    "http://www.teamcelliott.com/wp-content/uploads/2014/12/2014-12-15-14.04.26-1024x576.jpg",
  ]
},
{
  "title": "Personal Blog 2 ",
  "dates" : "2014-present",
  "description" : "Blogged about life in Kibaoni, Tanzania.",
  "images": [
  "http://www.teamcelliott.com/wp-content/uploads/2015/01/HotSauceList-1024x576.jpg",
  "http://www.teamcelliott.com/wp-content/uploads/2015/01/20150102_132438-1024x576.jpg",
  "http://www.teamcelliott.com/wp-content/uploads/2014/12/2014-12-15-14.04.26-1024x576.jpg",
      ]
    }
  ]
};

var bio = {
  "name" : "Thomas Elliott",
  "role" : "Communications Specialist",
  "welcomeMessage" : "Welcome to the resume",
  "contact" :
  {"mobile": 3173400877,
    "email": "tj@tjelliott.com",
    "github" : "ElCuffigno",
    "twitter" : "TJElliott",
    "Location" : "Kibaoni, Tanzania"
  },
  "skills" : ["Awesomeness", "Handsomeness", "Communications"],
  "bioPic" : "http://www.teamcelliott.com/wp-content/uploads/2014/12/flyingbirdhead.jpg"
};

//Add header stuff back.
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);

$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedPic);

//if statement quiz lesson 2.1
if (bio.skills.length > 0) {

  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skils").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skils").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skils").append(formattedSkill);
}

//for in loops (and loops in general) and added function
function displayWork (){
for (job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  var formattedEmployer = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;

$(".work-entry:last").append(formattedEmployer);

}
}

displayWork();

// Sample function, solved, looks for clicks on events.
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

// Internationalized Name function


function inName(name) {
  var nameTwo = name.split(" ");
  var lastName = nameTwo[1].toUpperCase();
  var firstName = nameTwo[0];

  return firstName + " " + lastName;
}

$("#main").append(internationalizeButton);
