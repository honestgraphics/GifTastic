$(document).ready(function(){

  //topics array
  var topics = ["schnauzer", "pug", "lab", "retriever", "jack russell", "scottish terrier"];

  //variable to store buttons
  var buttonsVar = "";

  //for loop to create buttons
  for (var i = 0; i < topics.length; i++) {
    
  function responseFunc (response){
    console.log(response);
  }
    
    buttonsVar += "<button type='button'>" + topics[i] + "</button>";
  }

  $("#buttons").append(buttonsVar);
  $("#submit").on("click", function(event){
    $("#buttons").append("<button type='button'>" + $("#textInput").val() + "</button>");
    event.preventDefault();
  });

  $("#buttons").on("click", "button", function(){
    var buttonVal =  $(this).text()
    
    var queryUrl = "http://api.giphy.com/GET/v1/gifs/search?q=" + buttonVal + "&api_key=B7dCpS1izEEO7K02H2BPX6BpkfJGwL3V&limit=10";
    
    $.ajax({
      url: queryUrl,
      type: "GET"
    }).then(responseFunc);
  });


});