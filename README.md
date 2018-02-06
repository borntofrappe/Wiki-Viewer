# Wikipedia Viewer

## The End Result 

- If you care only about results, you might enjoy the live demo at this particular [address](https://codepen.io/borntofrappe/full/PQNPwM/). 

- If you bother with the thought process behind the single page application, you can find a semi-rational description in the aplty named section. 

- Used for this project:

  - [jQuery](http://code.jquery.com/);
  
  - Wikipedia [API](https://www.mediawiki.org/wiki/API:Main_page);
  
  - svg illustrations from [unDraw](https://undraw.co/).

- Feature request:

  - alert user if the search icon is clicked AND no text is available in the input element, with the help of some visual;
  
  - if no result is available include some HTML detailing the lack of matches.


# Building the Single Purpose Application

## The Task

Build a single-purpose web application which allows visitors to look for Wikipedia entries.

The website should be able to specifically fulfill two user stories; it should be possible to:

- search for Wikipedia articles containing a particular keyword;
- search for a random Wikipedia entry, for kicks

## First Thoughts

FreeCodeCamp is generous enough to already provide useful references for the technical implementation of the project. 

1. Wikipedia's [API documentation](https://www.mediawiki.org/wiki/API:Main_page);
2. [Url](https://en.wikipedia.org/wiki/Special:Random) required for the random search.

That being said, for the **first task** it is necessary to:

1. call the Wikipedia API with the rightful request;
2. populate a list with one item for each of said entries

For the **second**, it is just necessary to directly open a new page to the defined url.

The technical implementation seems to be rather straightforward. Certainly more straightforward than the *Local Weather App*. Therefore, more time and attention are paid to the design of the page itself.

## The Design

The starting decision behind the design portrayed in the mockup folder is to present the user directly with the main action behind the page: search for something on Wikipedia.

Beside this first interaction, a choice is made to incorporate a call to a random Wikipedia entry only later in the page, as the page itself is briefly explained.

Finally, as a nice sendoff to the page, a final section is dedicated to a whimsical, hopefully not too aggressive one-liner and a simple social media reference.

The structure briefly introduced is visually explained in the mockup folder of this repository, under the label of Mockup 1, 2 and 3. Building on this rudimentary visualization, the page has been developed loosely matching the presented appearance.

With a relevant amount of time and attention dedicated on the CSS itself. 

Indeed in trying to incorporate multiple niceties, to enhance both ease of use and flair, the following additions were made to the bare HTML document:

- flexbox is used on all sections to easily center content, horizontally and most importantly vertically;

- odd sections have a gradient as background, slightly fading from the main color to a lighter hue;

- search input has a gradient border, enabled through the property of "border-image". Property I am still striving to completely understand;

- input itself has an animation, to introduce a label whenever the input has focus. This label is positioned atop the input and set to appear as the placeholder of the input element disappears. I find it to be a small nice effect, hopefully not detrimental to the visitor's experience;

- the search box containing input and icon has also a simple animation, to introduce the container gently from the side;

- svg images are included inline and positioned in the document as a nice visual addition. The key is to maintain a degree of visibility whilst avoiding any overlap on the corpus of the page, represented by the actual text (achieved through appropriate width/height and z-index);

- font sizes for the headers, as well as width and height for the svg images, incorporate a measure relative to the document's default options (rem), while also considering the size of the viewport (vw and vh). Both are weighed through the calc() function;

- the svg used as the icon next to the input as well as the svg introduced inline in the middle section, they both have a simple transition applied on hover;  

- the anchor link directly toward a random Wikipedia entry has a hover transition to create a border from the bottom center of the element (achieved through pseudo selectors and absolute positioning);

- media queries are set as to maintain visibility of the elements on smaller screen sizes.

The entirety of the CSS will be properly documented, including the nasty property of "border-image". Hopefully, the complexity introduced is understandable. 

## Technical Implementation

Besides the sections concocted in the design process, a fundamental component lays in the actual implementation of the Wikipedia API. It is indeed necessary to introduce new elements for the list of items that will be populated once a search string is passed through the input element and search results come pouring in.

In order to understand the format of the list, it is necessary to previously understand how the API inherently works. And most importantly, what kind of data is returned once a call is made.

### Research

The Wikipedia API works by setting multiple values in an objective URL.

The URL itself is comprised of multiple parts:

1. the **endpoint**; the basis for the URL in the English API; this is the instance from which all API requests are enacted.

  ```
  https://en.wikipedia.org/w/api.php
  ```

2. **format**; the format in which data is to be retrieved.

  By default this is set to JSON, but you might benefit also from a JSONFM format, in order to analyze the API's response more visually.

  ```
  format=json
  ```

3. **action**; the operation to be carried out through the API.

  Most frequent actions are *search* and *query*. Wikipedia has also a [helpful dynamic guide](https://en.wikipedia.org/w/api.php) to pick the action according to one's necessities.

  ```
  action=query
  ```

4. **properties**; additional parameters to specify the details of the API request, such as the amount of data to be retrieved or the conditions that have to be met in order to retrieve specific data.

  ```
  limit=10
  ```

**_Important to note_**: as you build the URL for your custom needs:

- separate format, actions and properties with an ampersand sign: `&`

- include white spaces with the following sequence: `%20`

### Practical Example

For the instance of the Wikipedia Viewer web-application, the rightful action seems to be found in the helpful sub-menu on the right, labeled *MediaWiki APIs*.

> Searching (by title, content, coordinates...)

With ease, it is possible to find the action required by the project from the [referenced page](https://www.mediawiki.org/wiki/API:Search_and_discovery).

```
action=opensearch
```

> Returns search results in OpenSearch format, each with text extract on Wikimedia projects.

With the newfound action, the [helpful dynamic guide](https://en.wikipedia.org/w/api.php) helps picking the properties the single purpose application needs.

For [action=opensearch](https://en.wikipedia.org/w/api.php?action=help&modules=opensearch) several properties are available.

- `search`: required parameter, representing literally the search string;

- `limit`: the upper threshold of results to return;

- `format`: format of the data.

Important to note: Wikipedia is generous enough to provide a [sandbox](https://www.mediawiki.org/wiki/Special:ApiSandbox) in which it is possible to experiment with API requests. In here it is possible to test the selected action and properties and analyze the result obtained in response.

**Objective URL**

Wrapping all these considerations together, and experimenting in the sandbox itself, the objective URL for the specific case seems to be:

```
https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=example&limit=10
```

For a search query in which the following properties are specified:

- search string of value "example";

- limit of 10 results;

- format in JSON.


Such a search returns the following result:

```
["example",["Example","Examples of civil disobedience","Example (musician)","Examples of data mining","Examples of feudalism","Example discography","Examples of yellowface","Examples of vector spaces","Examples of differential equations","Examples of groups"],["Example may refer to:","The following are examples of civil disobedience from around the world.","Elliot John Gleave (born 20 June 1982), better known by his stage name Example, is an English rapper, singer, songwriter and record producer signed to Epic Records and Sony Music.","Data mining has been used in many applications. The following are some notable examples of usage:","Examples of feudalism are helpful to fully understand feudalism and feudal society. Feudalism was practiced in many different ways, depending on location and time period, thus a high-level encompassing conceptual definition does not always provide a reader with the intimate understanding that detailed historical examples provide.","The discography of Example, a British singer, consists of five studio albums, twenty singles and 25 music videos.","Examples of yellowface includes the portrayal of East Asians in American film and theater and other Western media.","This page lists some examples of vector spaces. See vector space for the definitions of terms used on this page.","Differential equations arise in many problems in physics, engineering, and other sciences. The following examples show how to solve differential equations in a few simple cases when an exact solution exists.","Some elementary examples of groups in mathematics are given on Group (mathematics). Further examples are listed here."],["https://en.wikipedia.org/wiki/Example","https://en.wikipedia.org/wiki/Examples_of_civil_disobedience","https://en.wikipedia.org/wiki/Example_(musician)","https://en.wikipedia.org/wiki/Examples_of_data_mining","https://en.wikipedia.org/wiki/Examples_of_feudalism","https://en.wikipedia.org/wiki/Example_discography","https://en.wikipedia.org/wiki/Examples_of_yellowface","https://en.wikipedia.org/wiki/Examples_of_vector_spaces","https://en.wikipedia.org/wiki/Examples_of_differential_equations","https://en.wikipedia.org/wiki/Examples_of_groups"]]
```

An object storing:

1. the search string itself;

2. an array of results matching the search string;

3. an array containing a brief extract of the matching results;

4. an array of links referencing the exact pages for the matching results on Wikipedia.

**script.js**

What is then required in the script of the single purpose application is to make use of the `getJSON` function, available through *jQuery*, to harness and make use of this data.

A simple call to visualize the JSON object the API returns looks as follows:

```js
// declare function to display the JSON object from the objective URL
function getData() {
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=example&limit=10";
  $.getJSON(url, function(json) {
    console.log(json);
  });
}

// call function, check result in the developer console
getData();
```

Which simply returns: *Failed to load*. <!-- Cue sad trombone -->

> No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'null' is therefore not allowed access

Rummaging in the Wikipedia API page, again in the helpful sub-menu on the right, it's possible to find a section on [Cross-site requests](https://www.mediawiki.org/wiki/API:Cross-site_requests) which seems to be fitting. In it the documentation states a requirement of any request made from external application:

>  it must use JSONP or CORS

The page itself provides a reference to the documentation on how to handle CORS requests, cross origin requests to bypass the error message mentioned earlier.

In the description portion of the [page](https://www.mediawiki.org/wiki/Manual:CORS#Description), a possible solution is mentioned:

> For anonymous requests, origin query string parameter can be set to * which will allow requests from anywhere.

Adding the property of origin to the defined value seems to fix the error and allow to access the JSON object.

```js
function getData(searchString) {
  var url = "https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&format=json&search=example&limit=10";
  $.getJSON(url, function(json) {
    console.log(json);
  });
}
```

The only difference is found in the objective URL, which now contains the following property: **origin=***

In the developer console it is possible to analyze the returned object, containing the four expected items: <!-- cue happy trombone -->

- search string;

- array of matching results;

- array of extracts;

- array of URLs linking to Wikipedia entries.

Which is exactly what the Wikipedia Viewer application requires for its own purpose.

### Final thoughts

What the page then needs is:

1. modify the objective URL as to accept any string value found in the input element;

2. retrieve the JSON object

3. populate a list with a list item for each search result. List item detailing title, small extract and a link-able page.

*In practice*

- *Point one* is easy to achieve through jQuery itself.

  **In the context of the input element**, whenever the search icon is clicked or *enter* is pressed on the keyboard, create an API request for the value found in the input element itself.

  ```js
  /*
  declare a search function to retrieve a JSON object from the Wikipedia API.
  ** accepting as parameter a search string
  ** displaying the json object for this value
  */

  function getWikiSearchData(searchString) {
    // include the searchString parameter through string concatenation
    var url =
        "https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&format=json&search="
        + searchString
        + "&limit=10";
    // get json object for the objective URL
    $.getJSON(url, function(json) {
      console.log(json);
    });
  }

  /*
  listen for the click event on the search icon
  AND
  if the input element contains some text

  call the getWikiSearchData for that value
  AND
  empty the input element
  */
  $("#search-icon").on("click", function() {
    var inputValue = $("#search").val();
    if(inputValue !== "") {
      getWikiSearchData(inputValue);
      // set value of the input element to an empty string
      $("#search").val("");
    }
  });

  /*
  listen for the keydown event on the input element
  AND
  if the key pressed is enter (need to include a parameter for the event function)
  AND
  if the input element contains some text

  call the getWikiSearchData for that value
  AND
  empty the input element
  */
  $("#search").on("keydown", function(event) {  
    // store in a variable the key pressed on the keyboard  
    var keyCode = event.keyCode;
    // if said variable matches the values for 'enter',
    // then check for the presence of text in the input
    if(keyCode === 13) {
      var inputValue = $("#search").val();
      if(inputValue !== "") {
        getWikiSearchData(inputValue);
        // set value of the input element to an empty string
        $("#search").val("");
      }
    }
  });
  ```

  *Small note*: both events go through the same sequence. The code is to be improved by formatting said sequence in a reusable chunk of code, into functions that are called when the events occur. The rudimentary example helps in checking for the validity of the methods without much thought.

- *Point two* has been the main focus of the discussion so far, and it is already incorporated in the previous code example.

- *Point three* requires a change in visuals as the search box is substituted by the now-populated list of search results.

  jQuery allows to easily modify CSS properties through the appropriate function of `.css()`. Also to populate the list, jQuery allows to change the content of any and all HTML elements through dedicated functions, such as `.append()`.
  
  A design choice is made to display the list of search results in the same exact place in which the search box is first presented. It is therefore possible to use the same container, while building a new HTML for the structure.
  
  The following HTML structure is concocted to experiment with the dynamics between the two visuals. The actual structure is not programmed in the HTML, but in the script file through jQuery, using the information retrieved from the API.
  
  - svg icon to allow visitors to go back to the search box and search again
  
  - unordered list containing one list item for each result returned by the API.
  
    The list items themselves are set to use flexbox to display the title and extract of the search result, one on top the other, and on the right side display a svg icon forwarding toward the specific Wikipedia page.
    
  As the HTML would be placed alongside the search box itself, CSS is used to set `display:none`. The structure is set to be faded in through jQuery, only when needed and only after the search box is faded out.
  
  This sequence is reversed when the visitor willingly goes back, from the search result to the search input.
  
  ```js
  // when the user expresses the intention of finding results 
  $(".search-icon-svg").on("click", function() {
    // fade search box and show results as a callback function, once the fadeOut is over
    $(".search-box").fadeOut("slow", showResults);
  });

  // fade in the previously hidden division
  function showResults() {
    $(".search-results").fadeIn("slow");
  }

  // when the user expresses the intention of searching again
  // go in the opposite direction
  $(".search-again-svg").on("click", function() {
    $(".search-results").fadeOut("slow", showSearch);
  });

  function showSearch() {
    $(".search-box").fadeIn("slow");
  }
  ```

  **HTML structure in jQuery**: instead of showing a hard-coded structure from the HTML file, jQuery is used to inject the data from the Wikipedia API, directly in the document.
  
  From the objective URL, instead of simply displaying the JSON object, the items of the returned arrays are injected in list items.
  
    ```js
    $.getJSON(url, function(json) {
        // json[x] {where x is json[1], [2], [3]} provide arrays, of 1) matching results, 2) results' extracts 3) URLs for Wikipedia pages
        // json[x][y] provide the specific values

        // for the length of the array of results (2 results, twice)
        for(var i=0; i < json[1].length; i++) {
            // append a list item to the unordered list
            $("ul").append(
              "<li><div class='title-and-extract'><h1>" + json[1][i] + "</h1><h4>" + json[2][i].substring(0, 140) + "...</h4></div><a target='_blank' href=" + json[3][i] + "><svg height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z'/><path d='M0-.25h24v24H0z' fill='none'/></svg></a></li>"
              );
           }
    });
    ```  
    
    The structue appended in the unordered list is a tad hard to read, but not complex. Through string concatenation we appen list items with the following structure.
    
    ```html
    <li>
      <div class="title-and-extract">
        <h1></h1>
        <h4></h4>      
      </div>
      <a href="">
        <svg></svg>
      </a>
    </li>
    
    ```
    Where the header h1 contains the search result, the header h4 the brief extract and the anchor link has as a URL directing toward the respective Wikipedia page.
    
    **Important to note**: as the visitor may inquire for multiple searches, simply appending list items will soon compound past searches to an unsightly design. It is therefore advised to empty the unordered list, whenever the visitor asks for additional searches.
    
    ```js
    $(".list-to-be-populated").empty();
    ```
    
What is left is to wrap everything up and style with CSS consistenly with the rest of the page.
