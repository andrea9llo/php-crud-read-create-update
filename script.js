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
function getUpdateConf() {
  var me = $(this);
  $.ajax({
    url: "getUpdateConf.php",
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
function deleteConf() {

  var me = $(this);
  var id = me.data('id');
  $.ajax({
    url: "deleteConf.php",
    method: "POST",
    data: { id: id},
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

}
$(document).ready(function(){
  getConfigurazioni();
  $(this).on("click",".deleteConf",deleteConf);
  $("#my_form").submit(putNewConf);
  $("#my_form2").submit(getUpdateConf);
});
