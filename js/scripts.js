$(document).ready(function(){
  // event.preventDefault();
  var favIce1 = prompt("What is your favorite ice cream?");
  var favIce2 = prompt("What is your favorite ice cream?");
  var favIce3 = prompt("What is your favorite ice cream?");
  var favIce4 = prompt("What is your favorite ice cream?");
  var favIce = [];
  favIce = [favIce1, favIce2, favIce3, favIce4];
  console.log(favIce);

  favIce.forEach(function(Ice){

  $("#iceCream").append("<li>" + Ice + "</li>");
});
});
