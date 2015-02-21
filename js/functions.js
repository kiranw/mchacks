var email;
var startloc;
var endLat;
var endLong;
var itsOkay=false;

function hideSplash() {
	$("#splash").hide();
};


function coord() {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(showPosition);
	    } else {
	        $("#mylocationerror").show();
	    }
}
	

function showPosition(position) {
		startloc=[position.coords.latitude,position.coords.longitude]
		console.log("getting");
		itsOkay=true;
		$("#startloc").val("Position Recorded");
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

	if (/^[0-9A-Za-z]+@.$/.test(email)) {
		console.log("no invalid character")
		if (email.indexOf('@') > -1) {
		       console.log("we gud")
		} else {
		$("#invalidEmail").show();
		$("input#email").focus();
	    return false;	
		}
	} else {
		$("#invalidEmail").show();
		$("input#email").focus();
	    return false;
	};

    if (!itsOkay){
		startloc = $("input[name=startloc]").val();
		console.log("start given: "+ startloc);
	      if (startloc === "") {
	        $("#invalidstart").show();
	        $("input#startloc").focus();
	        return false;
	      }
	}


};



