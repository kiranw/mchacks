<html>
<head></head>
<body>
<ul> 
<?php 

function sendMessage() {
    // Install the library via PEAR or download the .zip file to your project folder.
// This line loads the library
require('/Users/mohamedkane/pear/share/pear/Services/Twilio.php');

$sid = "ACaf4280d3ec4f919c4e6615071a051620"; // Your Account SID from www.twilio.com/user/account
$token = "95b47b527b742f7cb9ef16ea051e57b9"; // Your Auth Token from www.twilio.com/user/account
$client = new Services_Twilio($sid, $token);
$message = $client->account->messages->sendMessage(
  "+15615940299", // From a valid Twilio number
  "+15618185988", // Text this number
  "Hello monkey!"
);
print $message->sid;
}

function sendEmail(){
	require '/Users/mohamedkane/Documents/mchacks/vendor/autoload.php';
	use Mailgun\Mailgun;
	# Instantiate the client.
	$mgClient = new Mailgun('key-c0175aef999785edcd8f15b108d5b416');
	$domain = "sandboxe541c833d11247adb0555d98709707b6.mailgun.org";
	# Make the call to the client.
	$result = $mgClient->sendMessage($domain, array(
    	'from'    => 'Excited User <mhkane@mit.edu>',
    	'to'      => 'Hassan <mhkane@mit.edu>',
    	'subject' => 'Hello',
    	'text'    => 'Testing some Mailgun awesomness!'
	));

	$mg = new Mailgun('key-c0175aef999785edcd8f15b108d5b416');
$result = $mg->get("$domain/log", array('limit' => 25, 
                                        'skip'  => 0));

$httpResponseCode = $result->http_response_code;
$httpResponseBody = $result->http_response_body;

# Iterate through the results and echo the message IDs.
$logItems = $result->http_response_body->items;
foreach($logItems as $logItem){
    echo $logItem->message_id . "\n";
}
}
sendEmail();
?>

</ul> 
</body>
</html>