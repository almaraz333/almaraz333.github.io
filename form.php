<?php
    $name = $_POST['name'];
    $company = $_POST['company'];
    $message = $_POST['message'];
    $from = $POST['email']
    $to = 'almarazc@msu.edu';
    $subject = 'Hello';

    $headers = "From: ".$from;
    $text = "You have recieved an email from ".$name.".\n\n".$message;


    if (isset($_POST['submit']) ){
        if (mail ($to, $subject, $text, $headers)) {
            echo '<p>Your message has been sent!</p>';
        } else {
            echo '<p>Something went wrong, go back and try again!</p>';
        }
    }
?>
