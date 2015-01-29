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
    "Location" : "Kibaoni, Tanzania",
  },
  "skills" : ["Awesomeness", "Handsomeness", "Communications"],
  "bioPic" : "http://www.teamcelliott.com/wp-content/uploads/2014/12/flyingbirdhead.jpg"
};

//if statement quiz lesson 2.1
if (bio.skills.length > 0) {

  $("#header").append(HTMLskillsStart);

  var formattedSkills = HTMLSkills.replace("%data%", bio.skills[0]);
  $("#skils").append(formattedSkills);
  formattedSkills = HTMLSkills.replace("%data%", bio.skills[1]);
  $("#skils").append(formattedSkills);
  formattedSkills = HTMLSkills.replace("%data%", bio.skills[2]);
  $("#skils").append(formattedSkills);
}
