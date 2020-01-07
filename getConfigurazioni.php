<?php
  header('Content-Type: application/json');
  $servername = 'localhost';
  $username = 'root';
  $pws = 'root';
  $db = 'hoteldb';
  $conn = new mysqli($servername, $username, $pws, $db);
  if ($conn -> connect_errno) {

    echo json_encode(-1);
    return;
  }

  $sql = "

      SELECT *
      FROM configurazioni

  ";
  $res = $conn -> query($sql);
  if ($res -> num_rows < 1) {

    echo json_encode(-2);
    return;
  }

  $stanze=[];
  while ($stanza = $res -> fetch_assoc()) {
    $stanze[] = $stanza;
  }

  echo json_encode($stanze);
