var email;
var startLat;
var startLong;
var endLat;
var endLong;
var itsOkay=false;

function hideSplash() {
	$("#splash").hide();
	//$("#splash2").show();
};


function coord() {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(showPosition);
	    } else {
	        $("#mylocationerror").show();
	    }
}
	

function showPosition(position) {
		startLat=position.coords.latitude;
		startLong= position.coords.longitude;
		console.log("getting");
		itsOkay=true;
		$("#startloc").val("Position Recorded");
		console.log(startLat+", "+startLong);
	}


function submit() {
	$('.error').hide();
	email = $("input[name=email]").val();
	console.log("email given: "+ email)
      if (email === "") {
        $("#email_error").show();
        $("input#email").focus();
        return false;
      }

	//if (/^[0-9A-Za-z]+@$/.test(email)) {
		//console.log("no invalid character")
		//if (email.indexOf('@') > -1 && email.indexOf('.')) {
		if ((email.indexOf('.') > -1) && email.indexOf("@" > -1)) {
		       console.log("we gud")
		} else {
		$("#invalidEmail").show();
		$("input#email").focus();
	    return false;	
		}
	/*} else {
		$("#invalidEmail").show();
		$("input#email").focus();
	    return false;
	};*/

    if (!itsOkay){
		//startloc = $("input[name=startloc]").val();
		//console.log("start given: "+ startloc);
	      if (startLat === undefined || startLong === undefined) {
	        $("#invalidstart").show();
	        $("input#startloc").focus();
	        return false;
	      }
	}

	if (endLat===undefined || endLong===undefined){
		$("#invalidstop").show();
		$("input#destination").focus();
		return false;
		console.log(endLat+", "+endLong);
	}
	
	// Store
localStorage.startLong = startLong;
localStorage.startLat = startLat;
localStorage.endLong = endLong;
localStorage.endLat = endLat;
localStorage.email = email;
// Retrieve


	window.location.href = "main.html";

};


/*===================================================================================================================
/*===================================================================================================================
			 M A P   S C R I P T S
/*===================================================================================================================
/*==================================================================================================================*/


startLat =  parseFloat(localStorage.startLat);
startLong =  parseFloat(localStorage.startLong);
endLat =  parseFloat(localStorage.endLat);
endLat =  parseFloat(localStorage.endLong);
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();

function initializeMap() {
 		directionsDisplay = new google.maps.DirectionsRenderer();
      var mapOptions = {
 suppressInfoWindows:true, 		
          center: new google.maps.LatLng(startLat,startLong),
          zoom: 12,
          minZoom:6,
		  mapTypeControl: false,
		  streetViewControl: false,
		  zoomControl: false,
		  panControl: false,
		  styles: [
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#bae6a5"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#e0d3af"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#a4daff"
            }
        ]
    }
]

 

        };
        var map = new google.maps.Map(document.getElementById('map'),
            mapOptions);

		//directionsDisplay.setMap(map);


       var marker = new google.maps.Marker({
      position: new google.maps.LatLng(startLat,startLong),
      map: map,
      icon: "/graphics/map-marker.png"
  });

		var marker2 = new google.maps.Marker({
      position: new google.maps.LatLng(endLat,endLong),
      map: map,
      icon: "/graphics/map-marker.png"
  });

 }

function calcRoute() {
  var start = new google.maps.LatLng(startLat,startLong);
  var end = new google.maps.LatLng(endLat,endLong);
  var request = {
      origin:start,
      destination:end,
      travelMode: google.maps.TravelMode.DRIVING,
      durationInTraffic:true
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {

      	directionsDisplay.setDirections({map: map, directions: response});
    }
  });
}


	calcRoute();
	console.log("calciling route");
   google.maps.event.addDomListener(window, 'load', initializeMap);
    



      


