<?php

$post = (!empty($_POST)) ? true : false;

if ($post) {
    $email = trim($_POST['email']);
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    $tel = htmlspecialchars($_POST["tel"]);
    $error = '';

    if (!$name) {
        $error .= 'Please enter your name<br />';
    }

// Phone check
    function ValidateTel($valueTel)
    {
        $regexTel = "/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/";
        if ($valueTel == "") {
            return false;
        } else {
            $string = preg_replace($regexTel, "", $valueTel);
        }
        return empty($string) ? true : false;
    }

    if (!$email) {
        $error .= "Please enter an email<br />";
    }
    if ($email && !ValidateTel($email)) {
        $error .= "Please enter a valid email<br />";
    }
    if (!$error)

// (length)
        if (!$message || strlen($message) < 1) {
            $error .= "Enter your message<br />";
        }
    if (!$error) {
        $name_tema = "=?utf-8?b?" . base64_encode($name) . "?=";

        $subject = "New request from the site domain.name";
        $subject1 = "=?utf-8?b?" . base64_encode($subject) . "?=";
        /*
        $message ="\n\nMessage: ".$message."\n\nName: " .$name."\n\nPhone: ".$tel."\n\n";
        */
        $message1 = "\n\nName: " . $name . "\n\nPhone: " . $tel . "\n\nE-mail: " . $email . "\n\nMessage: " .
            $message . "\n\n";

        $header = "Content-Type: text/plain; charset=utf-8\n";

        $header .= "From: New request <example@gmail.com>\n\n";
        $mail = mail("example@gmail.com", $subject1, iconv('utf-8', 'windows-1251', $message1), iconv('utf-8', 'windows-1251', $header));

        if ($mail) {
            echo 'OK';
        }

    } else {
        echo '<div class="notification_error">' . $error . '</div>';
    }
}