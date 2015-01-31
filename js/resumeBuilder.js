// JSON object
var education = {
  "schools": [
  {
    "school": "Wabash College",
    "location": "Crawfordsville, Indiana",
    "degree": "Bachelor of Arts",
    "major": ["English", "Religion"],
    "grad" : 2008
  },
  {
    "school": "Northwestern University",
    "location": "Evanston, Illinois",
    "degree": "Master of Science",
    "major": ["Journalism", "Digital Storytelling"],
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
  "location": "Ifakara,Tanzania",
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
  "contacts" :
  {"mobile": 3173400877,
    "email": "tj@tjelliott.com",
    "github" : "ElCuffigno",
    "twitter" : "TJElliott",
    "blog" : "http://www.teamcelliott.com",
    "location" : "Ifakara, Tanzania"
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



//if statement quiz lesson 2.1 ammended with loop
if (bio.skills.length > 0) {

  $("#header").append(HTMLskillsStart);
for (skill in bio.skills) {
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
  $("#skills").append(formattedSkill);
}
}

//Add contact info
var formMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formGithub = HTMLgithub.replace("%data%", bio.contacts.github);

$("#footerContacts").append(formMobile);
$("#footerContacts").append(formEmail);
$("#footerContacts").append(formTwitter);
$("#footerContacts").append(formGithub);

$("#topContacts").append(formMobile);
$("#topContacts").append(formEmail);
$("#topContacts").append(formTwitter);
$("#topContacts").append(formGithub);


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

/*
function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);
*/
// encapsulation and everything is objects

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

    var formattedProject = formattedTitle + formattedDates + formattedDescription;

    $(".project-entry:last").append(formattedProject);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
      var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
      $(".project-entry:last").append(formattedImage);
    }
  }


  }
}
projects.display();

//Add education
education.display = function () {
  for (school in education.schools){
    $("#education").append(HTMLschoolStart);

    var formattedName = HTMLschoolName.replace("%data%", education.schools[school].school);
    $(".education-entry:last").append(formattedName);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(formattedDegree);
    var formDates = HTMLschoolDates.replace("%data%", education.schools[school].grad);
    $(".education-entry:last").append(formDates);
    var formLoc = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formLoc);

  if (education.schools[school].major.length >0) {
    for (major in education.schools[school].major) {
      var formMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major[major]);
      $(".education-entry:last").append(formMajor);
      }
    }
  }

};

education.display();
//add a map
$("#mapDiv").append(googleMap);
