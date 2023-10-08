<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "dh215@hotmail.co.uk"; // Replace with your email address
    $from = "dh215@hotmail.co.uk";
    $message = $_POST["message"];
    $subject = "New Contact Form Submission";

    // $headers = "From: $from";

    // if (mail($to, $subject, $message, $headers)) {
    mail("dh215@hotmail.co.uk", "New Contact Form Submission", "Test");

    // if (mail($to, $subject, $message)) {
    //     echo "Your message has been sent successfully!";
    // } else {
    //     echo "Sorry, there was an error sending your message.";
    // }
}
?>