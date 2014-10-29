var bio = {
	"name" : "Irina Lobova",
	"role" : "Web Developer",
	"contacts": {
		"mobile": "617-500-82-51",
		"email": "irina.lobova@me.com",
		"github": "irinalobova",
		"twitter": "@irinalobova",
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
			"major": "Degital Media",
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
			"description": "lorem ipsum ..."
		},
		{
			"employer": "PromsvyazBank",
			"title": "economist",
			"location": "Moscow",
			"dates": "2011-2012",
			"description": "lorem ipsum ..."
		}
	]
};
var projects = {
	"projects": [
		{
			"title": "RDSY Website",
			"dates": 2013,
			"description": "lorem ipsum ...",
			"images": ["http://example1.com", "http://example2.com", "http://example3.com"] 
		},
		{
			"title": "RDSY Website",
			"dates": 2013,
			"description": "lorem ipsum ...",
			"images": ["http://example1.com", "http://example2.com", "http://example3.com"] 
		},
		{
			"title": "RDSY Website",
			"dates": 2013,
			"description": "lorem ipsum ...",
			"images": ["http://example1.com", "http://example2.com", "http://example3.com"]
		}
	]
};

//* * * * * Name and Role * * * * *//
if(bio.role.length > 0) {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
}

if(bio.name.length > 0) {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);
}

//* * * * * Contacts in header * * * * *//

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

if(bio.contacts.twitter.length > 0) {
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedTwitter);
}

if(bio.contacts.location.length > 0) {
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);
}

//* * * * * Picture and Welcome Msg * * * * *//

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").prepend(formattedBioPic);

var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);

//* * * * * Skills at a glance * * * * *//

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

//* * * * * Work Experience * * * * *//

for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);

};















