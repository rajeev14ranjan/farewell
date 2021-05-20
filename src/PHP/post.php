<?php

include("./connection.php");
$db = new dbObj();
$connection =  $db->getConnstring();

$request_method=$_SERVER["REQUEST_METHOD"];

switch($request_method){
case 'GET':
        header("HTTP/1.0 405 Method Not Allowed");
        break;
case 'POST':
        handle_post_request();
    break;
default:
        // Invalid Request Method
        header("HTTP/1.0 405 Method Not Allowed");
    break; 
}

// TODO: put this as security feature 
// Function to validate client key against server key 
function validate_Key($client_keyhex){
    $server_key = date("U");
    $client_key = base_convert($client_keyhex, 36, 10);
    
    $t_difference = $server_key - $client_key;
    if($t_difference >= -60 and $t_difference <= 60){
        return true;
    } else {
        return false;
    }
}

//Function to generate sequential id for greetings
function generate_id(){
    $id = base_convert(mt_rand(), 10, 36) . base_convert(date("U"), 10, 36);
    return $id;
}
//-------------- POST Methods ------------

function handle_post_request(){
    $data = json_decode(file_get_contents('php://input'), true);

    // TODO: Temporary disabling aut key veryfication
    // $key = $data["key"];
    // if(!validate_Key($key)){
    //     header('Content-Type: application/json');
    //     $response=array(
    //         'error' => 'INVALID REQUEST ORIGIN',
    //         'message' =>'401: Access to API DENIED'
    //     );
    //     echo json_encode($response);
    // } else {

    $action = $data["action"];
    switch($action){
        case 'getposts':
            get_posts();
            break;
        case 'savepost':
            save_post($data);
            break;
        default:
            // Invalid Request Method
            header("HTTP/1.0 405 Method Not Allowed");
        break; 
        }
    }
}
        
    

function save_post($data){
    global $connection;

    $msg = mysqli_real_escape_string($connection, $data["message"]);
    $sn = mysqli_real_escape_string($connection, $data["sender"]);
    
    $query="INSERT INTO posts SET message='".$msg."', sender='".$sn."'";

    if(mysqli_query($connection, $query))
    {
        $response=array(
            'status' => 1
        );
    }
    else
    {
        $response=array(
            'status' => 0
        );
    }
    header('Content-Type: application/json');
    echo json_encode($response);
}

function get_posts(){
    global $connection;

    $query= "SELECT * FROM posts ";

    $response=array();
    $result=mysqli_query($connection, $query);
    while($row=mysqli_fetch_assoc($result))
    {
        $response[]=$row;
    }
    
    header('Content-Type: application/json');
    echo json_encode($response);
}

?>