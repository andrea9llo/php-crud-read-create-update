<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.1.2/handlebars.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js"></script>
    <title>Conf Stanze</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>

    <form id="my_form">
      <label for="title">title</label>
      <input type="text" name="title" value=""><br>
      <label for="description">description</label>
      <input type="text" name="description" value=""><br>
      <input type="submit" name="submit" value="invio">
    </form>

    <div class="container">

    </div>


    <!-- blocco template -->
    <script id="entry-template" type="text/x-handlebars-template">
      <div class="configurazioni">
        <p>{{title}}</p>
        <p>{{description}}</p>
      </div>

    </script>
    <script type="text/javascript" src="script.js"></script>
  </body>
</html>
