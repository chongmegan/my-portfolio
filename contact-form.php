<?php
	$name = $_POST['name'];
	$visitor_email = $_POST['email'];
	$message = $_POST['message'];

	$email_from = $visitor_email;

	<script>
    	console.log(<?= json_encode($visitor_email); ?>);
	</script>

	$email_subject ="New Form Submission";
	
	$email_body = "User Name: $name.\n".
					"User Email: $visitor_email.\n".
						"User Message: $message.\n".

	$to = "chong.m@husky.neu.edu";

	$headers = "From: $email_from \r\n";

	$headers .= "Reply-To: $visitor_email \r\n";

	mail($to,$email_subject,$email_body,$headers);
	print("Malito sent!");

	header("Location: index.html");

?>
