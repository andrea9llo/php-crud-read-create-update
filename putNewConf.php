<?php
  header('Content-Type: application/json');

  list($title, $description) = [  $_POST["title"],
                                  $_POST["description"]
                                      ];
  if (!$title || !$description) {
    echo json_encode(-1);
    return;
  }
  $servername = 'localhost';
  $username = 'root';
  $pws = 'root';
  $db = 'hoteldb';
  $conn = new mysqli($servername, $username, $pws, $db);
  if ($conn -> connect_errno) {

    echo json_encode(-2);
    return;
  }

  $sql = "
      INSERT INTO configurazioni (title, description)
      VALUES (?, ?)

  ";
  $stmt = $conn -> prepare($sql);
  $stmt-> bind_param("ss", $title, $description);
  $res = $stmt-> execute();
  $conn-> close();
  echo json_encode($res);
