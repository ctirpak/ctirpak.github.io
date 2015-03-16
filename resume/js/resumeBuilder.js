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
	},
	htmlTags: {
		HTMLheaderName: "<h1 id='name'>%data%</h1>",
		HTMLheaderRole: "<span class='white-text'>%data%</span><hr/>",
		HTMLcontactGeneric: "<li class='flex-item'><span class='orange-text'>%contact%</span><span class='white-text'>%data%</span></li>",
		HTMLmobile: "<li class='flex-item'><span class='orange-text'>mobile</span><span class='white-text'>%data%</span></li>",
		HTMLemail: "<li class='flex-item'><span class='orange-text'>email</span><span class='white-text'>%data%</span></li>",
		HTMLtwitter: "<li class='flex-item'><span class='orange-text'>twitter</span><span class='white-text'>%data%</span></li>",
		HTMLlinkedIn: "<li class='flex-item'><span class='orange-text'>LinkedIn</span><span class='white-text'>%data%</span></li>",
		HTMLgithub: "<li class='flex-item'><span class='orange-text'>github</span><span class='white-text'>%data%</span></li>",
		HTMLblog: "<li class='flex-item'><span class='orange-text'>blog</span><span class='white-text'>%data%</span></li>",
		HTMLlocation: "<li class='flex-item'><span class='orange-text'>location</span><span class='white-text'>%data%</span></li>",
		HTMLbioPic: "<img src='%data%' class='biopic'>",
		HTMLWelcomeMsg: "<span class='welcome-message'>%data%</span>",
		HTMLskillsStart: "<h3 id='skillsH3'>Skills at a Glance:</h3><ul id='skills' class='flex-box'></ul>",
		HTMLskills: "<li class='flex-item'><span class='white-text'>%data%</span></li>",
		HTMLworkStart: "<div class='work-entry'></div>",
		HTMLworkEmployer: "<a href='#'>%data%",
		HTMLworkTitle: " - %data%</a>",
		HTMLworkDates: "<div class='date-text'>%data%</div>",
		HTMLworkLocation: "<div class='location-text'>%data%</div>",
		HTMLworkDescription: "<p><br>%data%</p>",
		HTMLprojectStart: "<div class='project-entry'></div>",
		HTMLprojectTitle: "<a href='#'>%data%</a>",
		HTMLprojectDates: "<div class='date-text'>%data%</div>",
		HTMLprojectDescription: "<p><br>%data%</p>",
		HTMLprojectImage: "<img class='proj-img img-zoom' alt='project picture' src='%data%'>",
		HTMLschoolStart: "<div class='education-entry'></div>",
		HTMLschoolName: "<a href='#'>%data%",
		HTMLschoolDegree: " -- %data%</a>",
		HTMLschoolDates: "<div class='date-text'>%data%</div>",
		HTMLschoolLocation: "<div class='location-text'>%data%</div>",
		HTMLschoolMajor: "<em><br>Major: %data%</em>",
		HTMLschoolDescription: "<p><br>%data%</p>",
		HTMLonlineClasses: "<h3>Online Classes</h3>",
		HTMLonlineTitle: "<a href='#'>%data%",
		HTMLonlineSchool: " - %data%</a>",
		HTMLonlineDates: "<div class='date-text'>%data%</div>",
		HTMLonlineURL: "<br><a href='#'>%data%</a>"

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
	},
	getHTML: function () {
		return model.htmlTags;
	}
};

//add content to page

var view = {
	tags: controller.getHTML(),
	init: function () {
		this.educationDisplay();
		this.workDisplay();
		this.projectsDisplay();
		this.bioDisplay();
		this.addMap();
		this.hideEmptySections();
		this.addEvents();
		this.initMap();
	},
	bioDisplay: function () {
		var bio = controller.getBio();
		var formattedName = this.tags.HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = this.tags.HTMLheaderRole.replace("%data%", bio.role);
		var formattedContact = this.tags.HTMLcontactGeneric.replace("%data%", bio.contacts.email);
		var formattedMobile = this.tags.HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = this.tags.HTMLemail.replace("%data%", bio.contacts.email);
		var formattedTwitter = this.tags.HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedLinkedIn = this.tags.HTMLlinkedIn.replace("%data%", bio.contacts.LinkedIn);
		var formattedGithub = this.tags.HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedLocation = this.tags.HTMLlocation.replace("%data%", bio.contacts.location);
		var bioPic = this.tags.HTMLbioPic.replace("%data%", bio.pictureURL);
		var formattedWelcomeMsg = this.tags.HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);
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
			$("#header").append(this.tags.HTMLskillsStart);
			var formattedSkill;
			for (var skill in bio.skills) {
				formattedSkill = this.tags.HTMLskills.replace("%data%", bio.skills[skill]);
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
		for (var school in education.schools) {
			$("#education").append(this.tags.HTMLschoolStart);
			formattedSchool = this.tags.HTMLschoolName.replace("%data%", education.schools[school].name);
			formattedDegree = this.tags.HTMLschoolDegree.replace("%data%", education.schools[school].Degree);
			formattedDates = this.tags.HTMLschoolDates.replace("%data%", education.schools[school].years);
			formattedLocation = this.tags.HTMLschoolLocation.replace("%data%", education.schools[school].location);
			formattedDescription = this.tags.HTMLschoolDescription.replace("%data%", education.schools[school].description);
			$(".education-entry:last").append(formattedSchool + formattedDegree);
			$(".education-entry:last").append(formattedDates);
			$(".education-entry:last").append(formattedLocation);
			$(".education-entry:last").append(formattedDescription);
		}
	},
	workDisplay: function () {
		var work = controller.getWork();
		for (var job in work.jobs) {
			$("#workExperience").append(this.tags.HTMLworkStart);
			var formattedEmployer = this.tags.HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedPosition = this.tags.HTMLworkTitle.replace("%data%", work.jobs[job].position);
			var formattedEmployerPosition = formattedEmployer + formattedPosition;
			var formattedDates = this.tags.HTMLworkDates.replace("%data%", work.jobs[job].years);
			var formattedLocation = this.tags.HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedDescription = this.tags.HTMLworkDescription.replace("%data%", work.jobs[job].description);
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
			$("#projects").append(this.tags.HTMLprojectStart);
			for (var proj in projects.project) {
				formattedProjTitle = this.tags.HTMLprojectTitle.replace("%data%", projects.project[proj].title);
				formattedProjDates = this.tags.HTMLprojectDates.replace("%data%", projects.project[proj].dates);
				formattedProjDesc = this.tags.HTMLprojectDescription.replace("%data%", projects.project[proj].description);
				$(".project-entry:last").append(formattedProjTitle);
				$(".project-entry:last").append(formattedProjDates);
				$(".project-entry:last").append(formattedProjDesc);
				for (var img in projects.project[proj].images) {
					formattedProjImg = this.tags.HTMLprojectImage.replace("%data%", projects.project[proj].images[img]);
					$(".project-entry:last").append(formattedProjImg);
				}
			}
		}

	},
	addMap: function () {
		var googleMap = "<div id='map'></div>";
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
		/*
		 $('button').click(function () {
		 var iName = inName() || function () {
		 };
		 $('#name').html(iName);
		 });
		 */
		$('.img-zoom').hover(function () {
			$(this).addClass('transition');

		}, function () {
			$(this).removeClass('transition');
		});

	},
	initMap: function () {
		/*
		 This is the fun part. Here's where we generate the custom Google Map for the website.
		 See the documentation below for more details.
		 https://developers.google.com/maps/documentation/javascript/reference
		 */
		var map;    // declares a global map variable


		/*
		 Start here! initializeMap() is called when page is loaded.
		 */
		function initializeMap() {

			var locations;

			var mapOptions = {
				disableDefaultUI: true
			};

			// This next line makes `map` a new Google Map JavaScript Object and attaches it to
			// <div id="map">, which is appended as part of an exercise late in the course.
			map = new google.maps.Map(document.querySelector('#map'), mapOptions);


			/*
			 locationFinder() returns an array of every location string from the JSONs
			 written for bio, education, and work.
			 */
			var locationInfo = [];

			function locationFinder() {

				// initializes an empty array
				var locations = [];
				var uniqueLocations = [];

				// adds the single location property from bio to the locations array
				locations.push(model.bio.contacts.location);
				locationInfo.push({
					"loc": model.bio.contacts.location,
					"content": model.bio.name
				});


				// iterates through school locations and appends each location to
				// the locations array
				for (var school in model.education.schools) {
					locations.push(model.education.schools[school].location);
					locationInfo.push({
						"loc": model.education.schools[school].location,
						"content": model.education.schools[school].name
					});
				}

				// iterates through work locations and appends each location to
				// the locations array
				for (var job in model.work.jobs) {
					locations.push(model.work.jobs[job].location);
					locationInfo.push({
						"loc": model.work.jobs[job].location,
						"content": model.work.jobs[job].employer + ": " + model.work.jobs[job].years
					});
				}

				//remove the duplicates from the array using jQuery
				$.each(locations, function (i, el) {
					if ($.inArray(el, uniqueLocations) === -1)
						uniqueLocations.push(el);
				});

				return uniqueLocations;
			}

			/*
			 createMapMarker(placeData) reads Google Places search results to create map pins.
			 placeData is the object returned from search results containing information
			 about a single location.
			 */
			function createMapMarker(placeData) {

				// The next lines save location data from the search result object to local variables
				var lat = placeData.geometry.location.k;  // latitude from the place service
				var lon = placeData.geometry.location.D;  // longitude from the place service
				var name = placeData.formatted_address;   // name of the place from the place service
				var bounds = window.mapBounds;            // current boundaries of the map window

				// marker is an object with additional data about the pin for a single location
				var marker = new google.maps.Marker({
					map: map,
					position: placeData.geometry.location,
					title: name
				});

				// infoWindows are the little helper windows that open when you click
				// or hover over a pin on a map. They usually contain more information
				// about a location.
				var locInfo = '<div class="info-window">';
				var loc1 = placeData.name;
				for (var info in locationInfo) {
					var loc2 = locationInfo[info].loc.split(", ")[0];
					if (loc1.slice(0, loc2.length) === loc2) {
						locInfo = locInfo + name + ": " + locationInfo[info].content + "<br>";
					}
				}
				locInfo = locInfo + "</div>";

				var infoWindow = new google.maps.InfoWindow({
					content: locInfo,
					maxHeight: 200

				});

				// hmmmm, I wonder what this is about...
				google.maps.event.addListener(marker, 'click', function () {
					// your code goes here!
					infoWindow.open(map, marker);
				});

				// this is where the pin actually gets added to the map.
				// bounds.extend() takes in a map location object
				bounds.extend(new google.maps.LatLng(lat, lon));
				// fit the map to the new marker
				map.fitBounds(bounds);
				// center the map
				map.setCenter(bounds.getCenter());
			}

			/*
			 callback(results, status) makes sure the search returned results for a location.
			 If so, it creates a new map marker for that location.
			 */
			function callback(results, status) {
				if (status === google.maps.places.PlacesServiceStatus.OK) {
					createMapMarker(results[0]);
				}
			}

			/*
			 pinPoster(locations) takes in the array of locations created by locationFinder()
			 and fires off Google place searches for each location
			 */
			function pinPoster(locations) {

				// creates a Google place search service object. PlacesService does the work of
				// actually searching for location data.
				var service = new google.maps.places.PlacesService(map);

				// Iterates through the array of locations, creates a search object for each location
				for (place in locations) {

					// the search request object
					var request = {
						query: locations[place]
					};

					// Actually searches the Google Maps API for location data and runs the callback 
					// function with the search results after each search.
					service.textSearch(request, callback);
				}
			}

			// Sets the boundaries of the map based on pin locations
			window.mapBounds = new google.maps.LatLngBounds();

			// locations is an array of location strings returned from locationFinder()
			locations = locationFinder();

			// pinPoster(locations) creates pins on the map for each location in
			// the locations array
			pinPoster(locations);

		};

		// Calls the initializeMap() function when the page loads
		window.addEventListener('load', initializeMap);

		// Vanilla JS way to listen for resizing of the window 
		// and adjust map bounds
		window.addEventListener('resize', function (e) {
			// Make sure the map bounds get updated on page resize
			map.fitBounds(mapBounds);
		});
	}
};

controller.init();