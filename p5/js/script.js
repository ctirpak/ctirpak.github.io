
function loadData() {

	var $body = $('body');
	var $wikiElem = $('#wikipedia-links');
	var $nytHeaderElem = $('#nytimes-header');
	var $nytElem = $('#nytimes-articles');
	var $greeting = $('#greeting');
	var streetURL = 'https://maps.googleapis.com/maps/api/streetview?size=600x400';
	var fullURL = '';
	var fullAddress = '';
	var nytURL = 'http://api.nytimes.com/svc/search/v2/articlesearch.json';
	var nytParams = {
		"api-key": "aeacc24cfc3061cdd0c6bba97bbba8ed:5:71450941",
		"fl": "headline,snippet,web_url"
	};


	// clear out old data before new request
	$wikiElem.text("");
	$nytElem.text("");

	// load streetview
	fullAddress = $('#street').val() + $('#city').val();
	fullURL = '<img class="bgimg" src="' + streetURL + '&location=' + fullAddress + '">';
	// console.log(fullURL);
	//$body.append(fullURL);
	// YOUR CODE GOES HERE!
	$.extend(nytParams, {'q': fullAddress});
	// NY Times request
	$.getJSON(nytURL, nytParams, function (data) {
		var item = '';

		// add address as a parameter for ajax request
		//console.log(data);

		var articles = data.response.docs;

		$nytHeaderElem.append(' for ' + fullAddress);

		for (var x = 0; x < articles.length; x++) {
			item = '<a href="' + articles[x].web_url + '"><h3>' + articles[x].headline.main + '</h3></a>';
			item += '<p>' + articles[x].snippet + '</p>';
			$nytElem.append(item);
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

			for (var x = 0; x < articleList.length; x++) {
				var articleStr = articleList[x];
				var url = 'http://en.wikipedia.org/wiki/' + articleStr;
				$wikiElem.append('<li><a href="' + url + '">' + articleStr + '</a></li>');
			}
			;
			clearTimeout(wikiRequestTimeout);
		}
	});

	return false;
}
;

$('#search-form').submit(loadData);

$("#search").dialog({
	closeOnEscape: false
});

$("#prior-search-terms").accordion({
	collapsible: true
});

function initialize() {
	var mapOptions = {
		location: 'lambertville nj',
		//center: {lat: -34.397, lng: 150.644},
		zoom: 8,
		styles: [{
				"stylers": [
					{"saturation": -85},
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
