<html>
<head></head>
<body>
<ul> 
<?php
function sendEmail(){
	require '/Users/mohamedkane/Documents/mchacks/vendor/autoload.php';
	$sendgrid = new SendGrid('username', 'password');
	$email = new SendGrid\Email();
	$email
	    ->addTo('mhkane@mit.edu')
	    ->setFrom('hassanmohamed0407@gmail.com')
	    ->setSubject('Subject goes here')
	    ->setText('Hello World!')
	    ->setHtml('<strong>Hello World!</strong>')
	;
	$sendgrid->send($email);
}
sendEmail();
?>
</ul> 
</body>
</html>
