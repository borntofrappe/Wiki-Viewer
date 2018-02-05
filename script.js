// remember to err on the side of over-commenting your code

function getWikiSearchData(searchString) {
  // include the searchString parameter through string concatenation
  var url =
      "https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&format=json&search="
      + searchString;
  // get json object for the objective URL
  $.getJSON(url, function(json) {
    for(var i=0; i < json[1].length; i++) {
        $("ul").append(
          "<li><div class='title-and-description'><h1>" + json[1][i] + "</h1><h4>" + json[2][i] + "</h4></div><a target='_blank' href=" + json[3][i] + "><svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z'/><path d='M0-.25h24v24H0z' fill='none'/></svg></a></li>"
          );
        }
  });
}

$(".search-icon-svg").on("click", function() {
  var inputValue = $(".search").val();
  if(inputValue !== "") {
    getWikiSearchData(inputValue);
    // set value of the input element to an empty string
    $(".search").val("");
    $(".search-box").fadeOut("slow", showResults);
  }
});

function showResults() {
  $(".search-results").fadeIn("slow");
}

$(".search").on("keydown", function(event) {
  var keyCode = event.keyCode;
  if(keyCode === 13) {
    var inputValue = $(".search").val();
    if(inputValue !== "") {
      getWikiSearchData(inputValue);
      // set value of the input element to an empty string
      $(".search").val("");
      $(".search-box").fadeOut("slow", showResults);
    }
  }
});



$(".search-again-svg").on("click", function() {
  $(".search-results").fadeOut("slow", showSearch);
});

function showSearch() {
  $(".search-box").fadeIn("slow", emptyList);
}

function emptyList() {
  $(".list-to-be-populated").empty();
}
