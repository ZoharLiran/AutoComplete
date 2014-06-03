$(document).ready(function(){
  $("#searchbar").focus();
  $("#results").hide();
  addListener();
})

var addListener = function(){
  $("#searchbar").on("keyup",function(){
    checkInput();
  })
}

var checkInput = function(){
  $("#search-results").empty()
  $("#results").hide();
  if (event.target.value.length != 0){
    askForResult(event.target.value);
    $("#results").show();
  }
}

var askForResult = function(input){
  $.ajax({
    type: "get",
    data: { input: input },
    url: "/search"
  }).done(function(serverData){
    renderResults(serverData);
  })
}

var renderResults = function(data){
  for (var i = 0; i < data.length; i++){
    $("#search-results").append("<li>" + data[i] + "</li>")
  }
}