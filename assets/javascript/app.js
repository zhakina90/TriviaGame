


var questions;
var queryURL = "https://opentdb.com/api.php?amount=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    
    })