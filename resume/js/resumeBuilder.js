var model = {
  bio: {
	"name": "Chris Tirpak",
	"role": "Web Application Developer",
	"contacts": {
	  "mobile": "<a href='#'></a>",
	  "email": "<a href='mailto:ctirpak1@gmail.com?Subject=About%20your%20resume...'>ctirpak1@gmail.com</a>",
	  "twitter": "<a href='https://twitter.com/c_tirpak'>@c_tirpak</a>",
	  "LinkedIn": "<a href='http://www.linkedin.com/in/christirpak'>Chris Tirpak</a>",
	  "github": "<a href='https://github.com/ctirpak'>github.com/ctirpak</a>",
	  "location": "Apex, NC"
	},
	"welcomeMsg": "8+ years of experience managing IT projects and building custom applications and tools that increase productivity and efficiency by eliminating manual processes and provide innovative, intuitive and effortless solutions.",
	"skills": ["HTML5", "JavaScript", "jQuery", "SharePoint", "MS SQL Server", "ASP.NET", "Visual Basic for Applications (VBA)", "Git", "Java", "C/C++", "Visual Basic"],
	"pictureURL": "images/skull.jpg"
  },
  work: {
	"jobs": [
	  {
		"employer": "AT&T",
		"position": "Sr Consultant Sys Integration - Business Solutions Group",
		"years": "2008 - Present",
		"location": "Raleigh, NC",
		"description": "Operational Effectiveness. Analyze existing organizational processes, identify areas for improvement and provide solutions that increase productivity and grow revenue for organization of 500+ employees. Deployed seven applications over the past five years which reduced project cycle time by 25%, resulting in faster revenue realization. New versions of three applications are released each quarter. Collaborate with users to gather requirements, create and maintain project timelines, share coding responsibilities with three developers, and follow SDLC methodologies for management of projects.  Use of HTML5, JavaScript, JQuery, SQL Server, SharePoint Designer, ASP.NET, VBA, Microsoft Access, Microsoft Excel, Visual Basic."
	  },
	  {
		"employer": "AT&T",
		"position": "Manager - Business Marketing - Wireless",
		"years": "2006 - 2007",
		"location": "Piscataway, NJ",
		"description": "Maintain average monthly inventory levels of 3,000 wireless devices and 10,000 Voice over IP (VoIP) telephone adapters for customer sales.  Create budgets, manage inventory, validate purchase orders and pay invoices. Developed three VBA applications to automate weekly database updates and generate monthly reports."
	  },
	  {
		"employer": "AT&T",
		"position": "Staff Manager - Consumer Operations Solutions and Transformation",
		"years": "1998 - 2006",
		"location": "Piscataway, NJ",
		"description": "Manage $600M annual budget for telecom billing, and supervise three employees. Fine-tune budget based on business strategy, track monthly results and determine root cause of variances, prepare monthly financial packages and provide read out to upper management. Perform “what if” analysis to determine impact of contractual changes."
	  },
	  {
		"employer": "AT&T",
		"position": "Associate Manager - Local Service End-to-End Architecture",
		"years": "1997 - 1998",
		"location": "Piscataway, NJ",
		"description": "Analyze system architecture to determine system and resource capacity needs for rollout of local telephone service for approximately 15 million customers. Determine feasibility and provide appropriate guidance. Create monthly forecasts. Manage team of developers to implement changes for custom application software."
	  },
	  {
		"employer": "AT&T",
		"position": "Associate Manager - LEC Billing Financial Management",
		"years": "1987 - 1997",
		"location": "Somerset, NJ",
		"description": "Associate Manager (1993 to 1997) – LEC Billing Financial Management. Manage $1.1M annual budget for over 1,000 Local Exchange Companies (LECs) and Independent Companies (ICOs) for telecom services. Reports Clerk (1987 to 1993) – Responsible for input and payment of 25 monthly LEC bills."
	  }
	]
  },
  projects: {
	"project": [
	  {
		"title": "Work Intake Front Door",
		"dates": "2009 to present",
		"description": "SharePoint 2010 site used as a client-facing tool for the submission of 125 monthly work requests, with a user base of 250+. Extensive use of workflows, JavaScript, jQuery, VBScript and SQL Server.",
		"images": ["images/fd1.jpeg", "images/fd2.jpeg"]
	  },
	  {
		"title": "Project Tool",
		"dates": "2011 to present",
		"description": "Excel VBA application used to create project artifacts such as scope documentation, system requirements, business scenarios, test cases, and change requests. New versions released each quarter, automatically pushed to 500+ users. VBA and SQL Server.",
		"images": ["images/rasl1.jpeg", "images/rasl2.jpeg"]
	  },
	  {
		"title": "Project Repository",
		"dates": "2011 to present",
		"description": "Excel VBA application used with the Project Tool application. Uses SQL database to store Project Tool components for re-use. 500+ users with 100+ components added per month.",
		"images": ["images/dasl1.jpeg", "images/dasl2.jpeg"]
	  },
	  {
		"title": "Code Calculator",
		"dates": "2014 to present",
		"description": "ASP.NET web application generates unique product tracking codes for 150 monthly sales orders. Includes data validation, HTML5, jQuery, SQL Server stored procedures.",
		"images": ["images/voltage1.jpeg", "images/voltage2.jpeg"]
	  },
	  {
		"title": "Project Status",
		"dates": "2014 to present",
		"description": "Excel VBA application which provides status and search functionality for 300+ projects. Creates an interface between Excel and SQL Server.",
		"images": ["images/heart1.jpeg", "images/heart2.jpeg"]
	  }



	]

  },
  education: {
	"schools": [
	  {
		"name": "Udacity",
		"Degree": "Front End Web Developer Nanodegree",
		"years": "2015 (expected)",
		"location": "Mountain View, CA",
		"description": "HTML5, CSS3, JavaScript, jQuery, Bootstrap, d3.js components, Responsive Web Design."
	  },
	  {
		"name": "University of Phoenix",
		"Degree": "BS-Informatoin Technology",
		"years": "2009",
		"location": "Phoenix, AZ",
		"description": "C++, Java, JavaScript, HTML, SQL Server, Database Management, Project Management"
	  },
	  {
		"name": "Raritan Valley Community College",
		"Degree": "AAS in Computer Programming",
		"years": "2002",
		"location": "Branchburg, NJ",
		"description": "C, C++, Java, Visual Basic and Web page design.  Graduated with highest honors."
	  }
	]
  }
};

var controller = {
  init: function () {
	view.init();
  },
  getBio: function () {
	return model.bio;
  },
  getWork: function () {
	return model.work;
  },
  getProjects: function () {
	return model.projects;
  },
  getEducation: function () {
	return model.education;
  }
};

//add content to page

var view = {
  init: function () {
	this.educationDisplay();
	this.workDisplay();
	this.projectsDisplay();
	this.bioDisplay();
	this.addMap();
	this.hideEmptySections();
	this.addEvents();
  },
  bioDisplay: function () {
	var bio = controller.getBio();
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts.email);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedLinkedIn = HTMLlinkedIn.replace("%data%", bio.contacts.LinkedIn);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var bioPic = HTMLbioPic.replace("%data%", bio.pictureURL);
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);
	//$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	//$("#header").prepend(bioPic);
	$("#header").append(formattedWelcomeMsg);
	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	//$("#footerContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedLinkedIn);
	$("#footerContacts").append(formattedGithub);
	if (bio.skills.length > 0) {
	  $("#header").append(HTMLskillsStart);
	  var formattedSkill;
	  for (skill in bio.skills) {
		formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	  }
	}

  },
  educationDisplay: function () {
	var education = controller.getEducation();
	var formattedSchool;
	var formattedDegree;
	var formattedDates;
	var formattedLocation;
	var formattedDescpription;
	for (school in education.schools) {
	  $("#education").append(HTMLschoolStart);
	  formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
	  formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].Degree);
	  formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].years);
	  formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
	  formattedDescription = HTMLschoolDescription.replace("%data%", education.schools[school].description);
	  $(".education-entry:last").append(formattedSchool + formattedDegree);
	  $(".education-entry:last").append(formattedDates);
	  $(".education-entry:last").append(formattedLocation);
	  $(".education-entry:last").append(formattedDescription);
	}
  },
  workDisplay: function () {
	var work = controller.getWork();
	for (job in work.jobs) {
	  $("#workExperience").append(HTMLworkStart);
	  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	  var formattedPosition = HTMLworkTitle.replace("%data%", work.jobs[job].position);
	  var formattedEmployerPosition = formattedEmployer + formattedPosition;
	  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].years);
	  var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	  $(".work-entry:last").append(formattedEmployerPosition);
	  $(".work-entry:last").append(formattedDates);
	  $(".work-entry:last").append(formattedLocation);
	  $(".work-entry:last").append(formattedDescription);
	}
  },
  projectsDisplay: function () {
	var projects = controller.getProjects();
	if (projects.project.length > 0) {
	  var formattedSkill;
	  var formattedProjTitle;
	  var formattedProjDates;
	  var formattedProjDesc;
	  var formattedProjImg;
	  $("#projects").append(HTMLprojectStart);
	  for (proj in projects.project) {
		formattedProjTitle = HTMLprojectTitle.replace("%data%", projects.project[proj].title);
		formattedProjDates = HTMLprojectDates.replace("%data%", projects.project[proj].dates);
		formattedProjDesc = HTMLprojectDescription.replace("%data%", projects.project[proj].description);
		$(".project-entry:last").append(formattedProjTitle);
		$(".project-entry:last").append(formattedProjDates);
		$(".project-entry:last").append(formattedProjDesc);
		for (img in projects.project[proj].images) {
		  formattedProjImg = HTMLprojectImage.replace("%data%", projects.project[proj].images[img]);
		  $(".project-entry:last").append(formattedProjImg);
		}
	  }
	}

  },
  addMap: function () {
	$("#mapDiv").append(googleMap);
  },
  hideEmptySections: function () {
	if (document.getElementsByClassName("flex-item").length === 0) {
	  document.getElementById("topContacts").style.display = "none";
	}
	if (document.getElementsByTagName("h1").length === 0) {
	  document.getElementById("header").style.backgroundColor = "black";
	}
	if (document.getElementsByClassName("work-entry").length === 0) {
	  document.getElementById("workExperience").style.backgroundColor = "black";
	}
	if (document.getElementsByClassName("project-entry").length === 0) {
	  document.getElementById("projects").style.backgroundColor = "black";
	}
	if (document.getElementsByClassName("education-entry").length === 0) {
	  document.getElementById("education").style.backgroundColor = "black";
	}
	if (document.getElementsByClassName("skills-entry").length === 0) {
	  document.getElementById("skillsCharHeading").style.display = "none";
	}
	if (document.getElementsByClassName("flex-item").length === 0) {
	  document.getElementById("letsConnect").style.backgroundColor = "black";
	}
	if (document.getElementById("map") === undefined) {
	  document.getElementById("mapDiv").style.backgroundColor = "black";
	}

  },
  addEvents: function () {
		$('button').click(function () {
		var iName = inName() || function () {
		};
		$('#name').html(iName);
	});
	$('.img-zoom').hover(function () {
		$(this).addClass('transition');

	}, function () {
		$(this).removeClass('transition');
	});

  }
};

controller.init();