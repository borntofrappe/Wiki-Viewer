/*
function to retrieve a JSON object for Wikipedia entries matching a search string
*** accept  as parameter a searchString
*** inject this searchString in an objective URL, which is used for the API call 
*** retrieve the JSON object from the API request, with jQuery through the .getJSON() function 
*** loop through the array of search results in order to populate the unordered list found in the HTML

populate list with the following HTML structure, for **every** search result in the JSON object

<li>
  <div class="title-and-extract">
    <h1>{Search Result}</h1>
    <h4>{Brief introduction to the search result}</h4>      
  </div>
  <a href="{URL forwarding toward the Wikipedia page for the search result}">
    <svg>{svg icon for a right-facing arrow}</svg>
  </a>
</li>
*/

function getWikiSearchData(searchString) {
  // include the searchString parameter through string concatenation
  var url =
      "https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&format=json&search="
      + searchString;
  
  $.getJSON(url, function(json) {
    for(var i=0; i < json[1].length; i++) {
        $("ul").append(
          "<li><div class='title-and-description'><h1>" + json[1][i] + "</h1><h4>" + json[2][i] + "</h4></div><a target='_blank' href=" + json[3][i] + "><svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z'/><path d='M0-.25h24v24H0z' fill='none'/></svg></a></li>"
          );
        }
  });
}

/*
respond to a click event on the search icon svg, with which visitors enact the Wikipedia search
*** store in a variable the value from the input element 
*** IF this value is different than an empty string 
    *** enact the search through the search function, for the string found in the input element
    *** reset the value in the input element, setting it to an empty string 
    *** remove the search box for the input element + icon in order to then include the search result
    (search result included as a callback function, once the original content is no longer visible)
*/
$(".search-icon-svg").on("click", function() {
  var inputValue = $(".search").val();
  if(inputValue !== "") {
    getWikiSearchData(inputValue);
    $(".search").val("");
    $(".search-box").fadeOut("slow", showResults);
  }
});

// function to show search results by fading in the container of the svg + span + unnordered list
function showResults() {
  $(".search-results").fadeIn("slow");
}


/*
respond to a keydown event on the input element (whenever the visitor types in the search box)
*** store in a variable the keyCode representing the key pressed (need to include a parameter for the function as to analyze the event and its properties)
*** IF this keyCode matches 13, meaning the visitor has pressed enter (procede with same structure seen before)
    *** store in a variable the value from the input element 
    *** IF this value is different than an empty string 
        *** enact the search through the search function, for the string found in the input element
        *** reset the value in the input element, setting it to an empty string 
        *** remove the search box for the input element + icon in order to then include the search result
        (search result included as a callback function, once the original content is no longer visible)
*/
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


/*
respond to a click event on the svg icon which redirects the visitor from the search results to the search box
*** fade out the search result container and as a callback call a function to make the search box re-appear
*/
$(".search-again-svg").on("click", function() {
  $(".search-results").fadeOut("slow", showSearch);
});

// function to show the search box by fading in its container and call as a callback a function which empties the unordered list of search results
function showSearch() {
  $(".search-box").fadeIn("slow", emptyList);
}
// function to empty the unordered list as to avoid multiple appended elements
function emptyList() {
  $(".list-to-be-populated").empty();
}
