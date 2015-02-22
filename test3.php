<html>
<head></head>
<body>
<ul> 
<?php 
function send($body) {
    // Install the library via PEAR or download the .zip file to your project folder.
// This line loads the library
require('/Users/mohamedkane/pear/share/pear/Services/Twilio.php');

$sid = "ACaf4280d3ec4f919c4e6615071a051620"; // Your Account SID from www.twilio.com/user/account
$token = "95b47b527b742f7cb9ef16ea051e57b9"; // Your Auth Token from www.twilio.com/user/account
$client = new Services_Twilio($sid, $token);
$message = $client->account->messages->sendMessage(
  "+15615940299", // From a valid Twilio number
  "+15618185988", // Text this number
  $body
);
print $message->sid;
}
send("OOOOO");
?>
</ul> 
</body>
</html>