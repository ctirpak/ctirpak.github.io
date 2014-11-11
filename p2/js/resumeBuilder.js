var bio = {
	"name": "Chris Tirpak",
	"role": "Web Application Developer",
	"contacts": {
		"mobile": "908-512-6356",
		"email": "<a href='mailto:ctirpak1@gmail.com?Subject=About%20your%20resume...'>ctirpak1@gmail.com</a>",
		"twitter": "<a href='https://twitter.com/c_tirpak'>@c_tirpak</a>",
		"github": "<a href='https://github.com/ctirpak' alt='bio picture'>https://github.com/ctirpak</a>",
		"location": "Apex, NC"
	},
	"welcomeMsg": "Welcome to my resume",
	"skills": ["HTML5", "JavaScript", "jQuery", "SQL Server", "ASP.NET", "VBA"],
	"pictureURL": "images/skull.jpg"
};
var work = {
	"jobs": [
		{
			"employer": "AT&T",
			"position": "Manager",
			"years": "2004 to present",
			"city": "Raleigh, NC",
			"description": "Application developer. Design and build applications for a user base of 500+ employees. Applications built using HTML, JavaScript, jQuery, ASP.NET, Excel VBA, SQL Server."
		},
		{
			"employer": "AT&T",
			"position": "Manager",
			"years": "1990 to 2003",
			"city": "Raleigh, NC",
			"description": "Budget Analysist. Manage $1.1B budget. Manage budgets and expenses for 1,200 Local Exchange Companies (LECs) to aid in contract negotiations."
		},
		{
			"employer": "Alston School Photography",
			"position": "Film Technician",
			"years": "1984 to 1987",
			"city": "Edison, NJ",
			"description": "Film editor. Duties include editing film and printing pictures for school photography studio."
		}
	]
};
var projects = {
	"project": [
		{
			"title": "BPE Front Door",
			"dates": "2009 to present",
			"description": "Sharepoint 2010 site used as a work intake tool for projects. Extensive use of Workflows, JavaScript, jQuery. Also includes fucntionality to query SQL Server databases.",
			"images": [
				{
					"imgLink": null
				}
			]
		},
		{
			"title": "RASL",
			"dates": "2011 to present",
			"description": "Excel VBA application used for the creation of project related artifacts: scope documentation, requirements, business scenarios, test cases and change requests. VBA code makes use of SQL Server database to be used to 'push' code patches to 500+ user community.",
			"images": [
				{
					"imgLink": null
				}
			]
		},
		{
			"title": "DASL",
			"dates": "2013 to present",
			"description": "Excel VBA application used in conjuction with RASL. Implementation of project artifact library which is the conduit between RASL and a SQL Server database. Allows users to 'reuse' project artifacts as a starting point for new project work.",
			"images": [
				{
					"imgLink": null
				}
			]
		},
		{
			"title": "Project Voltage",
			"dates": "2014 to present",
			"description": "ASP.NET web application. User form provides data to SQL Server stored procedure which auto generates a range of codes used for order processing. Database keeps track of codes issued by user.",
			"images": [
				{
					"imgLink": null
				}
			]
		},
		{
			"title": "HEART",
			"dates": "2014 to present",
			"description": "Excel VBA application which provides status and search functionality for projects. Creates an interface between Excel and SQL Server.",
			"images": [
				{
					"imgLink": null
				}
			]
		}



	]

};
var education = {
	"schools": [
		{
			"name": "Udacity",
			"Degree": "Front End Web Developer Nanodegree",
			"years": "2014 to present",
			"city": "Online"
		},
		{
			"name": "University of Phoenix",
			"Degree": "BS-Informatoin Technology",
			"years": "2009",
			"city": "Online"
		},
		{
			"name": "Raritan Valley Community College",
			"Degree": "AAS in Computer Programming",
			"years": "2002",
			"city": "Brandchburg, NJ"
		}
	]
};
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts.email);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var bioPic = HTMLbioPic.replace("%data%", bio.pictureURL);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);
var formattedSchool = HTMLschoolName.replace("%data%", education.schools[0].name);
var formattedDegree = HTMLschoolDegree.replace("%data%", education.Degree);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(bioPic);
$("#header").append(formattedWelcomeMsg);
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedTwitter);
$("#footerContacts").append(formattedGithub);


$("#education").append(HTMLschoolStart);
$("#education").append(formattedSchool);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill;

	for (skill in bio.skills) {
		formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}
}

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedPosition = HTMLworkTitle.replace("%data%", work.jobs[job].position);
		var formattedEmployerPosition = formattedEmployer + formattedPosition;
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].years);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].city);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedEmployerPosition);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();

$(document).click(function(loc){
	logClicks(loc.clientX,loc.clientY);
});