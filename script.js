function reset() {
  $(".container").html("");
}

function printConf(data){
  reset();
  var target = $(".container");
  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);
  for (var i = 0; i < data.length; i++) {
    var stanze = data[i];
    var context = stanze;
    var html = template(context);
    target.append(html);
  }
}

function getConfigurazioni() {
  $.ajax({
    url:"getConfigurazioni.php",
    method:"GET",
    success: function(data){
      printConf(data);
    },
    error: function(error){
      console.log("error",error);
    }
  });
}

function putNewConf() {
  var me = $(this);
  $.ajax({
    url: "putNewConf.php",
    method: "POST",
    data: me.serialize(),
    success: function(data){
      if(data){
        getConfigurazioni();
      }
      console.log("data",data);
    },
    error: function(error){
      console.log("error",error);
    }
  });
  return false;
}
$(document).ready(function(){
  getConfigurazioni();
  $("#my_form").submit(putNewConf);
});
