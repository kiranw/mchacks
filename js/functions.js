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
	
	

};


/*===================================================================================================================
/*===================================================================================================================
			 M A P   S C R I P T S
/*===================================================================================================================
/*==================================================================================================================*/
console.log("getting here")
console.log(startLat)



function initializeMap() {
     console.log(endLat);
      var mapOptions = {

          center: new google.maps.LatLng(startLat,startLong),
          zoom: 8
        };
        var map = new google.maps.Map(document.getElementById('map'),
            mapOptions);
      }
      google.maps.event.addDomListener(window, 'load', initializeMap);
    



      


