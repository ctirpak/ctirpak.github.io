
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

$("#search").dialog({
    closeOnEscape: false
});

$("#results").accordion({
    collapsible: true,
    heightStyle: "fill"
});

function initialize() {
    var mapOptions = {
	//location: 'edison nj',
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
