# Wikipedia Viewer

## The End Result 

If you care only about results a live demo is currently being built on codepen at the following [address](https://codepen.io/borntofrappe/full/PQNPwM/). If you bother with the thought process behind the single page application, what follows may be of some marginal value. 

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

// TODO FINISH COMMENTING CSS


## Technical Implementation

Besides the sections concocted in the design process, a fundamental component lays in the actual implementation of the Wikipedia API. It is indeed necessary to introduce new elements for the list of items that will be populated once a search string is passed through the input element and search results come pouring in.

In order to understand the format of the list, it is necessary to previously understand how the API inherently works. And most importantly, what kind of data is returned once a call is made.


// TO DO: ADD TECHNICAL IMPLEMENTATION 
