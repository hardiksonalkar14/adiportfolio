<form action="contact.php" method="post">
	First Name <input type="text" name="name" id="name"> <br> <br>

	Subject <input type="text" name="subject" id="subject"> <br> <br>

	phone <input type="text" name="phone" id="phone"> <br> <br>
	email <input type="text" name="email" id="email"> <br> <br>
	Message <input type="text" name="message" id="message"> <br> <br>

	<Input type="submit">

</form>

<?php

$servername = "localhost";

$username = "root";

$password = "";

$dbname = "myportfolio";



// Create connection

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection

if ($conn->connect_error) {

	die("Connection failed: " . $conn->connect_error);
}



$name = $_POST['name'];

$subject = $_POST['subject'];

$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];



$sql = "INSERT INTO `contactme` (`id`, `name`, `subject`, `phone`, `email`, `message`) VALUES (NULL, '', '', '', '', '')";



if ($conn->query($sql) === TRUE) {

	echo "New record created successfully";
} else {

	echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>