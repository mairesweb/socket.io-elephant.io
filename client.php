<?php
// using namespace Elephant.io
use ElephantIO\Client;
use ElephantIO\Engine\SocketIO\Version1X;

// require lib
require 'elephant.io/vendor/autoload.php';

// create client for server http://localhost:9009
$client = new Client(new Version1X('http://localhost:9009'));

// open connection
$client->initialize();

// send for server (listen) the any array
$client->emit('listen', ['age' => 28]);

// close connection
$client->close();
