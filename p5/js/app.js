// this is the model for the data
var model = {
	// map options are used to set initial default values and styles
	mapOptions: {
		center: {lat: 40.782, lng: -73.965},
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
	'places': [
		{
			'name': 'edison nj',
			'marker': null
		},
		{
			'name': 'Somerset NJ',
			'marker': null
		},
		{
			'name': 'Piscataway NJ',
			'marker': null
		},
		{
			'name': 'East Brunswick NJ',
			'marker': null
		},
		{
			'name': 'Bridgewater NJ',
			'marker': null
		}
	]
};

//creates new item which contains
//location name and
//google map marker
var Item = function (data) {
	this.name = ko.observable(data.name);
	this.marker = ko.observable(data.marker);
};


var viewModel = function () {
	//capture reference to parent of inner scope items
	that = this;
	//create new google map and save it to the model
	model.map = new google.maps.Map($('#map-canvas')[0], model.mapOptions);
	//create new geocoder object to be used to translate location names to latLng
	this.geocoder = new google.maps.Geocoder();

	//array to hold all of the map items
	this.itemList = ko.observableArray([]);

	//loop through each of the items in teh model and
	//add markers to the map and
	//set up click eventListener
	model.places.forEach(function (oneItem) {
		//geocode location into latLng
		//pass location name as first argument
		//second argument is callback to execute
		that.geocoder.geocode({'address': oneItem.name}, function (results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				//if status ok, create new marker and save in model
				//pass arguments of google map and location
				oneItem.marker = new google.maps.Marker({
					map: model.map,
					position: results[0].geometry.location
				});
				//add click event listener to marker
				//centers map and displays info
				google.maps.event.addListener(oneItem.marker, 'click', function() {
					model.map.setZoom(12);
					model.map.setCenter(oneItem.marker.getPosition());
				});
				console.log(oneItem);
				//add to observable array
				//new item is created that is observable
				//for the name and google map marker
				that.itemList.push(new Item(oneItem));
			} else {
				//something went wrong
				alert('Geocode was not successful for the following reason: ' + status);
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
		//get and display information about the location
		//TODO: use ajax to get data from external sites
	};
};

//initiate knockout with viewModel
ko.applyBindings(new viewModel);

