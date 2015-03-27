// this is the model for the data
var model = {
	// map options are used to set initial default values and styles
	mapOptions: {
		center: {lat: -34.397, lng: 150.644},
		zoom: 8,
		styles: [{
				"stylers": [
					{"saturation": -65},
					{"gamma": 0.43},
					{"lightness": -11}
				]
			}]
	},
	// holds currently selected item from results panel
	selectedMarker: null,
	// search items and markers
	'markers': [
		{
			'name': 'Marker 1',
			center: {
				lat: -34.397,
				lng: 150.644
			}
		},
		{
			'name': 'Marker 2',
			center: {
				lat: -35.397,
				lng: 150.644
			}
		},
		{
			'name': 'Marker 3',
			center: {
				lat: -36.397,
				lng: 150.644
			}
		},
		{
			'name': 'Marker 4',
			center: {
				lat: -37.397,
				lng: 150.644
			}
		},
		{
			'name': 'Marker 5',
			center: {
				lat: -38.397,
				lng: 150.644
			}
		}
	]
};

function codeAddress() {
  var geocoder;
	var address = document.getElementById('address').value;
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });


function loadData() {

	var $wikiElem = $('#wikipedia-links');
	var $nytHeaderElem = $('#nytimes-header');
	var $nytElem = $('#nytimes-articles');
	var fullAddress = '';
	var nytURL = 'http://api.nytimes.com/svc/search/v2/articlesearch.json';
	var nytParams = {
		"api-key": "aeacc24cfc3061cdd0c6bba97bbba8ed:5:71450941",
		"fl": "headline,snippet,web_url"
	};
	var historyCount = parseInt($('#history-count').text()) + 1;
	console.log(historyCount);

	// clear out old data before new request
	$wikiElem.text("");
	$nytElem.text("");

	// load streetview
	fullAddress = $('#street').val();
	$.extend(nytParams, {'q': fullAddress});

	$('#history-items').append('<li>' + fullAddress + '</li>');
	$('#history-count').text(historyCount);


	// NY Times request
	$.getJSON(nytURL, nytParams, function (data) {
		var item = '';

		// add address as a parameter for ajax request
		//console.log(data);

		var articles = data.response.docs;

		$nytHeaderElem.append(' for ' + fullAddress);

		for (var x = 0; x < articles.length; x++) {
			item = '<li><a href="' + articles[x].web_url + '" title="">' + articles[x].headline.main + '</a></li>';
			$nytElem.append(item);
			$nytElem.children(':last').tooltip({
				content: articles[x].snippet
			});
		}

	}).error(function () {
		$nytHeaderElem.text('Error loading articles');
	});

	// wikipedia request

	var wikiRequestTimeout = setTimeout(function () {
		$wikiElem.text('failed to get wikipedia resources');
	}, 8000);

	var wikiURL = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + fullAddress + '&format=json&callback=wikiCallback';
	$.ajax({
		url: wikiURL,
		dataType: 'jsonp',
		success: function (response) {
			console.log(response);
			var articleList = response[1];
			var item = null;

			for (var x = 0; x < articleList.length; x++) {
				var articleStr = articleList[x];
				var url = 'http://en.wikipedia.org/wiki/' + articleStr;
				$wikiElem.append('<li><a href="' + url + '" title="">' + articleStr + '</a></li>');
				$wikiElem.children(':last').tooltip({
					content: response[2][x]
				});
			}
			;
			if (articleList.length === 0) {
				$wikiElem.append('<li>No Wikipedia articles found for ' + fullAddress + '</li>');
			}
			clearTimeout(wikiRequestTimeout);
		}
	});
	return false;
}
;

$('#search-form').submit(loadData);



function initialize() {
	var mapOptions = {
		center: {lat: -34.397, lng: 150.644},
		zoom: 8,
		styles: [{
				"stylers": [
					{"saturation": -65},
					{"gamma": 0.43},
					{"lightness": -11}
				]
			}]
	};
	var map = new google.maps.Map(document.getElementById('map-canvas'),
			mapOptions);
}

initialize();

//google.maps.event.addDomListener(window, 'load', initialize);

// loadData();
