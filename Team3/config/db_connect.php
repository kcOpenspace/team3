<?php
    //CONNECT TO THE DATABASE SERVER
    // $servername = "localhost";
    // $username = "team3";
    // $password = "betachad1";
    // $db_name = "team3shop_db";
 
    define("servername","localhost");
    define("username","team3");
    define("password","betachad1");
    define("db_name","team3shop_db");
    
    function db_connection(){ 
        $db_connect = new mysqli(servername,username,password,db_name);

        if (!$db_connect) {
            die ("Connection to DB Failed: ".$db_connect->connect_error);
        }
        else{
            return $db_connect;
        }
    }
?>