$(document).ready(function () {

  //topics array
  var topics = ["schnauzer", "pug", "lab", "retriever", "jack russell", "scottish terrier"];

  //variable to store buttons
  var buttonsVar = "";

  //for loop to create buttons
  for (var i = 0; i < topics.length; i++) {
    buttonsVar += "<button type='button'>" + topics[i] + "</button>";
  }

  function responseFunc(response) {
    console.log(response);

    $("#gifs").empty();
    //check if it's empty, then don't do anything
    for (var i = 0; i < response.data.length; i++) {
      //parse through data.. build it out similar to buttons but this time divs with images inside
      var div = $('<div >');
      div.append("<p>Rating: " + response.data[i].rating + "</p>");
      var img = $('<img src="' + response.data[i].images.original_still.url + '"/>');
      img.attr("still", response.data[i].images.original_still.url);
      img.attr("original", response.data[i].images.original.url);
      div.append(img);
      $("#gifs").append(div);
    }
  }

  //create an onclick for clicking on the gifs... do it similar for how we did the buttons but know we are looking for image
  $("#gifs").on("click", "img", function () {
    var img = $(this);
    if (img.attr("still") === img.attr("src")) {
      img.attr("src", img.attr("original"));
    } else {
      img.attr("src", img.attr("still"));
    }
  });

  //when it clicks on one of those, your gif as part of its attributes will have an image url and a still url (swap between animation*unstill and pictures*still)

  $("#buttons").append(buttonsVar);
  $("#submit").on("click", function (event) {
    $("#buttons").append("<button type='button'>" + $("#textInput").val() + "</button>");
    event.preventDefault();
    $("#textInput").val("");
  });

  $("#buttons").on("click", "button", function () {
    var buttonVal = $(this).text()

    // var queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + buttonVal + "&api_key=B7dCpS1izEEO7K02H2BPX6BpkfJGwL3V&limit=10";

    var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=B7dCpS1izEEO7K02H2BPX6BpkfJGwL3V&q=" + buttonVal + "&limit=10";

    $.ajax({
      url: queryUrl,
      type: "GET"
    }).then(responseFunc);
  });


});