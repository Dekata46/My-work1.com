<?php 

$email = $_POST['email'];
$name = $_POST['name'];
$massage = $_POST['massage'];

$subject = "=?utf-8?B?".base64_encode("Сообщение с сайта")."?="; //тема письма
$headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";

$success = mail("salomonova.n@yandex.ru", $subject, $massage, $headers);
echo $success;
?>