
// project 5

// this is the model for the data
var model = {
	// map options are used to set initial default values and styles
	mapOptions: {
		center: {lat: 35.8287126, lng: -78.7692707},
		zoom: 12,
		styles: [{
				"stylers": [
					{"saturation": -65},
					{"gamma": 0.43},
					{"lightness": -11}
				]
			}]
	},
	map: null,
	// currently selected item
	currentItem: null,
	// search items and markers
	//
	//address: location used for geocoding address
	//title: search term used in ajax requests
	//marker: google maps marker object
	//infowindow: google maps infoWindow object
	//infoContent: html string to be displayed in infoWindow
	'places': [
		{
			'address': 'SAS Institute Inc, SAS Campus Drive, Cary, NC',
			'title': 'SAS Institute Inc',
			'marker': null,
			'infowindow': null,
			'infoContent': null
		},
		{
			'address': 'Muir Woods National Monument',
			'title': 'Muir Woods National Monument',
			'marker': null,
			'infowindow': null,
			'infoContent': null
		},
		{
			'address': 'Grand Canyon National Park',
			'title': 'Grand Canyon National Park',
			'marker': null,
			'infowindow': null,
			'infoContent': null
		},
		{
			'address': 'Las Vegas',
			'title': 'Las Vegas',
			'marker': null,
			'infowindow': null,
			'infoContent': null
		},
		{
			'address': 'San Francisco',
			'title': 'San Francisco',
			'marker': null,
			'infowindow': null,
			'infoContent': null
		},
		{
			'address': 'Acropolis, Athens Greece',
			'title': 'Acropolis',
			'marker': null,
			'infowindow': null,
			'infoContent': null
		},
		{
			'address': 'Empire State Building',
			'title': 'Empire State Building',
			'marker': null,
			'infowindow': null,
			'infoContent': null
		},
		{
			'address': 'World Trade Center',
			'title': 'World Trade Center',
			'marker': null,
			'infowindow': null,
			'infoContent': null
		},
		{
			'address': 'Mount Lycabettus',
			'title': 'Mount Lycabettus',
			'marker': null,
			'infowindow': null,
			'infoContent': null
		}
		
	]
};

//creates new item which contains
//location address and
//google map marker
var Item = function (data) {
	this.address = ko.observable(data.title);
	this.marker = ko.observable(data.marker);
};


var viewModel = function () {
	//capture reference to parent of inner scope items
	var that = this;
	//create new google map and save it to the model
	model.map = new google.maps.Map($('#map-canvas')[0], model.mapOptions);
	//create new geocoder object to be used to translate location address to latLng
	this.geocoder = new google.maps.Geocoder();

	//array to hold all of the map items
	this.itemList = ko.observableArray([]);
	
	//variable to hold the search term
	this.searchFor = ko.observable('');

	//loop through each of the items in the model and
	//add markers to the map and
	//set up click eventListener
	model.places.forEach(function (oneItem) {
		// set up wikipedia request
		// set timeout if wikipedia is not available
		var wikiRequestTimeout = setTimeout(function() {
			alert('failed to get wikipedia resources for ' + oneItem.title);
		}, 8000);
		
		//wikipedia ajax request
		//use the title of the marker as the search term
		oneItem.infoContent='';
		var wikiURL = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + oneItem.title + '&format=json';
		$.ajax({
			url: wikiURL,
			dataType: 'json',
			type: 'POST',
			headers: { 'Api-User-Agent': 'Map Application' },
			success: function(response) {
				//console.log(response);
				//store the list of articles
				var articleList = response[1];
				//store the artile summaries
				var articleSummary = response[2];
				//store the article URLs
				var articleURLs = response[3];
				/*
				//store the first article and build the html that will be displayed in the infowindow
				oneItem.infoContent = oneItem.infoContent + '<h3><a href="'  + articleURLs[0] + '" target="_blank">' + articleList[0] + '</a></h3><p>' + articleSummary[0] + '</p>';
				*/
				//loop through each article and build the html that will be displayed in the infowindow
				for (var x = 0; x < articleList.length; x++) {
					oneItem.infoContent = oneItem.infoContent + '<h3><a href="'  + articleURLs[x] + '" target="_blank">' + articleList[x] + '</a></h3><p>' + articleSummary[x] + '</p>';
				}
				//clear the timeout function if the request was successful
				clearTimeout(wikiRequestTimeout);
			},
			error: function (xhr, status) {
				oneItem.infoContent = '<h3>No WikiPedia information returned for ' + oneItem.title + '</h3><p>Additional information:</p><p>' + xhr + '</p><p>' + status + '</p>';
			}
		});
		//geocode location into latLng
		//pass location address as first argument
		//second argument is callback to execute
		that.geocoder.geocode({'address': oneItem.address}, function (results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				//if status ok
				//create new marker and save in model
				//pass arguments of google map and location
				oneItem.marker = new google.maps.Marker({
					map: model.map,
					position: results[0].geometry.location,
					title: oneItem.title
				});
				//create infowindow for marker
				oneItem.infowindow = new google.maps.InfoWindow({
					content: oneItem.infoContent
				});
				//add click event listener to marker
				//centers map and displays info
				google.maps.event.addListener(oneItem.marker, 'click', function() {
					//close all open infowindows
					model.places.forEach(function(item) {
						item.infowindow.close();						
					});
					//set zoom level
					model.map.setZoom(12);
					//center map
					model.map.setCenter(oneItem.marker.getPosition());
					//open the infowindow
					oneItem.infowindow.open(model.map, oneItem.marker);
				});
				//console.log(oneItem);
				//add to observable array
				//new item is created that is observable
				//for the address and google map marker
				that.itemList.push(new Item(oneItem));
			} else {
				//something went wrong
				alert('Geocode was not successful for [' + oneItem.address + '] the following reason: ' + status);
				return null;
			}
		});
	});
	
	//sets the model's current item to the item clicked in the list
	this.setCurrentItem = function (newItem) {
		//set model.currentItem
		model.currentItem = newItem;
		//animate corresponding google map marker
		newItem.marker().setAnimation(google.maps.Animation.DROP);
		//center google map on selected items marker
		model.map.setCenter(newItem.marker().getPosition());
		//open the infowindow
		//trigger the click event
		google.maps.event.trigger(newItem.marker(), 'click');
	};
	//used to fileter list as user types in <input>
	//triggered by keyup event
	this.filterList = function(){
		//convert to lower case
		var valThis = this.searchFor().toLowerCase();
		//assume no match found
		var noresult = 0;
		//show all items if search term is blank
		if(valThis === ""){
			//show all items
			$('#item-list > li').show();
			//flag match found
			noresult = 1;
			//remove no results message
			$('.no-results-found').remove();
			//remove formatting
			$('#item-list > li').each(function() {
				$(this).html($(this).text());
			});
		//else serach term entered
		} else {
			//loop through each item to see if there's a match
			$('#item-list > li').each(function(){
				//covert to lower case
				var text = $(this).text().toLowerCase();
				//search for search term within list item
				var match = text.indexOf(valThis);
				//if match found anywhere, show the item
				if (match >= 0) {
					//show the item
					$(this).show();
					//add highlighing to the part of the text that matched the search result
					$(this).html($(this).text().slice(0,match) + '<span class="highlight">' + $(this).text().slice(match,match + valThis.length) + '</span>' + $(this).text().slice(match + valThis.length,$(this).text().length));
					noresult = 1;
					$('.no-results-found').remove();
				//else no match
				} else {
					//hide the item
					$(this).hide();
					//remove highlighting
					$(this).html($(this).text());
				}
			});
		}
		//if no matches found, display message
		if (noresult === 0) {
			$('.no-results-found').remove();
			$("#empty-list").append('<li class="no-results-found">No results found.</li>');
		}
	};
};

//initiate knockout with viewModel
ko.applyBindings(new viewModel());

