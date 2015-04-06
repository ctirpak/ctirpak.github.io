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

var Item = function (data) {
	this.name = ko.observable(data.name);
	this.marker = ko.observable(data.marker);
};


var viewModel = function () {
	that = this;
	model.map = new google.maps.Map($('#map-canvas')[0], model.mapOptions);
	this.geocoder = new google.maps.Geocoder();

	this.itemList = ko.observableArray([]);

	model.places.forEach(function (oneItem) {
		that.geocoder.geocode({'address': oneItem.name}, function (results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				oneItem.marker = new google.maps.Marker({
					map: model.map,
					position: results[0].geometry.location
				});
				console.log(oneItem);
				that.itemList.push(new Item(oneItem));
			} else {
				alert('Geocode was not successful for the following reason: ' + status);
				return null;
			}
		});
	});

	this.setCurrentItem = function (newItem) {
		model.currentItem = newItem;
		newItem.marker().setAnimation(google.maps.Animation.DROP);
	};
};


ko.applyBindings(new viewModel);

