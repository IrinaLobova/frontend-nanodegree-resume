var bio = {
	"name" : "Irina Lobova",
	"role" : "Web Developer",
	"contacts": {
		"mobile": "617-500-82-51",
		"email": "irina.lobova@me.com",
		"github": "irinalobova",
		"location": "Boston"
	},
	"welcomeMessage": "Welcome to my resume page!",
	"skills": ["awesomeness", "HTML", "CSS", "JS"],
	"bioPic": "images/me.jpg"
};
var education = {
	"schools": [
		{
			"name": "Academy of Budget and Treasury of the Ministry of Finance",
			"location": "Moscow",
			"degree": "BA",
			"major": "Finance",
			"dates": 2009,
			"url": "http://international.fa.ru/"
		},
		{
			"name": "Harvard Extension School",
			"location": "Cambridge MA",
			"degree": "BA",
			"major": "Digital Media",
			"dates": 2016,
			"url": "http://www.extension.harvard.edu/"
			}
		],
	"onlineCourses": [
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": 2014,
			"url": "https://www.udacity.com/"
		},
		{
			"title": "CSS",
			"school": "TreeHouse",
			"dates": 2013,
			"url": "http://teamtreehouse.com/"
		},
		{
			"title": "HTML",
			"school": "Lynda.com",
			"dates": 2013,
			"url": "http://lynda.com/"
		},	
	]
};
var work = {
	"jobs": [
		{
			"employer": "Sberbank of Russia",
			"title": "credit inspector",
			"location": "Moscow",
			"dates": "2009-2011",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		},
		{
			"employer": "PromsvyazBank",
			"title": "economist",
			"location": "Moscow",
			"dates": "2011-2012",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		}
	]
};
var projects = {
	"projects": [
		{
			"title": "RDSY Website",
			"dates": 2013,
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			"image": "images/rdsy.jpg" 
		},
		{
			"title": "RDSY Website",
			"dates": 2013,
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			"image": "images/foodapp.jpg" 
		},
		{
			"title": "RDSY Website",
			"dates": 2013,
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			"image": "images/aviasales.jpg"
		}
	]
};

/* * * * * Name and Role * * * * */

if(bio.role.length > 0) {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
}

if(bio.name.length > 0) {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);
}

/* * * * * Contacts * * * * */

if(bio.contacts.length > 0) {
	var formattedContacts = HTMLcontactGeneric.replace("%data%", bio.contacts);
	$("#topContacts").append(formattedContacts);
	$("#footerContacts").append(formattedContacts);
}

if(bio.contacts.mobile.length > 0) {
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);
}

if(bio.contacts.email.length > 0) {
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);
}

if(bio.contacts.github.length > 0) {
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);
}

if(bio.contacts.location.length > 0) {
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);
}

/* * * * * Picture and Welcome Msg * * * * */

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").prepend(formattedBioPic);

var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);

/* * * * * Skills at a glance * * * * */

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}

/* * * * * Work Experience * * * * */

for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedworkLocation);

    var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
};

/* * * * * Projects * * * * */

for (project in projects.projects) {
	$(".small-block-grid-3").append(HTMLprojectStart);

	var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	$(".project-entry:last").append(formattedProjectTitle);

	var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	$(".project-entry:last").append(formattedProjectDates);

	var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	$(".project-entry:last").append(formattedProjectDescription);

	var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);
	$(".project-entry:last").append(formattedProjectImage);
}

/* * * * * Education * * * * */

for (school in education.schools) {
	$("#education").append(HTMLschoolStart);

	var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
	var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
	$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
	
	var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
	$(".education-entry:last").append(formattedSchoolLocation);

	var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
	$(".education-entry:last").append(formattedSchoolDates);

	var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
	$(".education-entry:last").append(formattedSchoolMajor);

}

$("#education").append(HTMLonlineClasses);

for (onlineCourse in education.onlineCourses) {

	$("#education").append(HTMLonlineStart);

	var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
	var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
	$(".online-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);


	var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
	$(".online-entry:last").append(formattedOnlineDates);

	var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
	$(".online-entry:last").append(formattedOnlineURL);

}

/* * * * * Internationalized Name * * * * */

function inName() {
	var name = bio.name.trim().split(" ");
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();
	return name[0]+" "+name[1];
};

$("#header").append(internationalizeButton);

/* * * * * Map * * * * */

$("#mapDiv").append(googleMap);































