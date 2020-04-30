<?php
    $con = mysqli_connect("localhost","root","","spablog");
    $sql = "SELECT * FROM blogs";
    $query = mysqli_query($con,$sql);
    $result = mysqli_fetch_all($query,MYSQLI_ASSOC);
    $json_result = json_encode($result);
    echo $json_result;
?>