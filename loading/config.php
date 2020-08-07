<?php
date_default_timezone_set ( 'PRC' );
header ( "Content-type: text/html; charset=utf-8" );
$servername = "10.0.0.5";
$username = "whatmama";
$password = "L7BfS76ktLbE";
$dbname = "what_mama";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 