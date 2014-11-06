var bio = {
	"name" : "Chris Tirpak",
	"role" : "Web Developer",
	"contacts" : {
	"mobile" : "908-512-6356",
	"email" : "<a href='mailto:ctirpak1@gmail.com?Subject=About%20your%20resume...'>ctirpak1@gmail.com</a>",
	"twitter" : "<a href='https://twitter.com/c_tirpak'>@c_tirpak</a>",
	"github" : "<a href='https://github.com/ctirpak' alt='bio picture'>https://github.com/ctirpak</a>",
	"location" : "Apex, NC"
	},
	"welcomeMsg" : "Welcome to my resume",
	"skills" : ["HTML5", "JavaScript", "jQuery", "SQL Server", "ASP.NET", "VBA"],
	"pictureURL" : "images/skull.jpg"
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contact);
var formattedMobile = HTMLmobile.replace("%data%", bio.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.location);
var bioPic = HTMLbioPic.replace("%data%",bio.pictureURL);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",bio.welcomeMsg);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(bioPic);
$("#header").append(formattedWelcomeMsg);
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedTwitter);
$("#footerContacts").append(formattedGithub);
