/* Custom Javascript for this PhoneGap APP */

document.addEventListener("deviceready",onDeviceReady,false);

function onDeviceReady()
{
  //Phonegap is ready
  console.log("Phonegap is ready");
}

$(document).on( "mobileinit", function() {
	console.log("Initialize jQuery Mobile Phonegap Enhancement Configurations")
    // Make your jQuery Mobile framework configuration changes here!
    $.mobile.allowCrossDomainPages = true;
    $.support.cors = true;
    $.mobile.buttonMarkup.hoverDelay = 0;
    $.mobile.pushStateEnabled = false;
    $.mobile.defaultPageTransition = "none";
});
//{ "geo": { "$nearSphere": {"__type": "GeoPoint", "latitude": 30.0, "longitude": -20.0}}}

$('body').on('click', '#search-btn', function(e){
  e.preventDefault();
  var query = encodeURI($('#search-text').val());
  console.log('query', query);

  

    $('#map').attr('src', 'https://www.google.com/maps/embed/v1/place?key=AIzaSyBZhaRczXtpJHUEnPeq300rP6ji6-X4IEI&q=' + query);

  });

  $.ajax({
    url: 'https://api.parse.com/1/classes/restaurants/',
    method: 'GET',
    dataType: 'json',
    headers: {
      'X-Parse-Application-Id': '6W64LqKgGiD8T5bh0ZS7hqipzy3uO4CZXEMHtJeG',
      'X-Parse-REST-API-Key': 'YNHIPKXWGsIBYyZXrshrZlVto8OyHzMrcHE30QD1'
    },
    success: function(data){
      populateList(data.results);
    },
    error: function(err){
      console.log('err', err)
    }

});

  var populateList = function(data){
   console.log('data', data[0].name);
   var counter = 70;
   for (var i = 0; i < data.length; i++){
      // console.log(data[i]);
      var item = '<div class="list-wrapper">' +
          '<div class="img">' +
            '<img class="img" src="http://placekitten.com/80/'+ (counter + i) +'"/>' +
          '</div>' +
          '<div class="info">' +
            '<div class="name-info">' +
              '<p class="name">' + data[i].name + '</p>' +
              '<p class="address">' + data[i].address + '</p>' +
            '</div>' +
            '<div class="desc">' +
              '<p class="description">' + data[i].description + '</p>' +
              '<p class="meta"></p>' +
            '</div>' +
          '</div>' +
        '</div>';

       $('#restuarant-list').append('<li>'+ item + '</li>');
   }

  }



