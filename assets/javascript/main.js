$(document).ready(function(){

  //topics array
  var topics = ["schnauzer", "pug", "lab", "retriever", "jack russell", "scottish terrier"];

  //variable to store buttons
  var buttonsVar = "";

  //for loop to create buttons
  for (var i = 0; i < topics.length; i++) {
    
    
    
    buttonsVar += "<button type='button'>" + topics[i] + "</button>";
  }

  $("#buttons").append(buttonsVar);
  $("#submit").on("click", function(event){
    $("#buttons").append("<button type='button'>" + $("#textInput").val() + "</button>");
    event.preventDefault();
  });




});