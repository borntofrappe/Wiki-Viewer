/*
HTML CSS JS files for every project

WHEN USING REMOVE COMMENTS
WHICH GUIDE THE DEVELOPMENT
*/

// remember to err on the side of over-commenting your code

var url= "https://en.wikipedia.org/w/api.php?action=opensearch&search=Greece&limit=5&format=json%callback=?";

$("#search-icon").on("click", function() {

  $.getJSON(url, function(json) {
    alert(json[1]);
  });

});
