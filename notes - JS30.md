# day1: JS drumkit

attributes, "data-key". limiting the attributes that everybody was

learnings:
- key events
- TransitionEnd Event
- animationEnd Event

using the css classes to 'animate' static objects

----------------------------------------------------------------------------------------------
# day2: dynamic JS updating the CSS locations and rotations

goals:
applying a time-activated rotation to each clock hand element
problem: rotate, naively applied is applied to the middle of the element.

// The querySelector() method returns the first element that matches a specified CSS selector(s) in the document.
const secondHand = document.querySelector('.second-hand')

----------------------------------------------------------------------------------------------
# day3: dynamically updating the CSS variables with JS

updating CSS variables in JS. makes for dynamic updating on page.
with Sass you can create variables with $prefix, but cannot update them!!
https://sass-lang.com/documentation/variables

- pickers and ranges in HTML <br>
  <input id="spacing" type="range" name="spacing" min="10" max="200" value="10" data-sizing="px">

- syntax for defining CSS variables
  /* highest level CSS variable declaration, enables using these variables lower down in CSS*/
  :root {
  --base: #ad2fc6;
  --spacing: 10px;
  --blur: 10px;
  }

- syntax for JS to update the CSS variables (which then update the elements they style)
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

- difference between NodeList (return type of querySelector) vs an Array
  __proto__ or 'prototype' methods


- NB: difference between px and pc for CSS data values
  --spacing: 10pc;
  --spacing: 10px;

- hierarchical scoping of CSS: takes the lowest level

----------------------------------------------------------------------------------------------
# day4: array methods 1

console.table(oldest);

- ternerary operator, inline comparison
  if a.year is greater than b.year return 1, else -1
  a.year > b.year ? 1 : -1


----------------------------------------------------------------------------------------------
# day5: heavy CSS for flexbox and 'flex panels'

- elements in highly nested flexboxes, with transitions


- CSS selectors
  '>' is the child selector, * is all such elements
  .panel > * {

- issue: transitionend not firing with simple mouseover


----------------------------------------------------------------------------------------------
# day6: type ahead feature. prompts that match based on text


- fetching the city/state data

- then when type into box, filter the array

learnings
- fetch() browser inbuilt

- spread operator to unpack
  Array.push(...array)


- .join at end of the
  }).join('');


----------------------------------------------------------------------------------------------
# day7: array method cardio 2

- dynamic full year
  const currentYear = (new Date()).getFullYear();

- inverse filter logic
  people.filter(e => !filter_cb(e));

- .some(): at least one
  .every(): all of them
  .find(): return the first one. like filter but just for first found
  .findIndex():
  .splice(): dropping indexed element from an array
  .findIndex():

redux world

// 'redux world' pattern for creating new array of the comments WITHOUT index object
const newComments = [
...comments.slice(0, index),
...comments.slice(index + 1)
];

----------------------------------------------------------------------------------------------
# day8: HTML5 canvas

- DONT draw directly on the canvas in HTML, draw on the context (CAN BE 3D!!)
  const canvas = document.querySelector('#draw');
  const ctx = canvas.getContext('2d');

- HSL manipulation
  https://mothereffinghsl.com/

can dynamically set using backticks and hsl(hue, sat, lightness)

----------------------------------------------------------------------------------------------
# day9: chrome dev tools tricks

- if dont know 'what JS is modifying an element'
  inspect, right click, break on, attribute modifications

- different `console.` methods:
  log
  info
  warn
  error
  assert
  dir
  group
  count

----------------------------------------------------------------------------------------------
# day10: shift key checkboxes

- event.shiftKey boolean, more specific than finding a key's


----------------------------------------------------------------------------------------------
# day11:
video tag API
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs

callbacks to buttons: toggle play, setting currentTime,
progressbar expansion as %-function of current time

full screen button:
- new button with class fullscreen which goes into player__controls band
- callback
- mozilla reference for document.fullscreenElement

extensions:
- jquery
  selectors by #ID or .class
  install via CDN


----------------------------------------------------------------------------------------------
# day12: Key Sequence detection

- Array push
- array negative indexing from the end
- array.prototype.splice()

- cornify.js adding random unicorns with cornify_add();
```html
<script type="text/javascript" src="https://www.cornify.com/js/cornify.js"></script>
```


----------------------------------------------------------------------------------------------
# day13: slide on scroll
- window and element manipulation
- console.count(e);
- debouncing: limiting the number of function calls by continuous or frequent events
  on scroll
- elemnt properties: innerHeight, offsetTop
- css styling for translating and moving
```css
.slide-in.active {
    opacity: 1;
    transform: translateX(0%) scale(1);
}
```


----------------------------------------------------------------------------------------------
# day14: 14 - JavaScript References VS Copying
- variables that point to primitive types
- esp misunderstood with NESTED data
- updating an array: array assignments are just a reference to the original array
- ways of copying an array
  const team = players.slice();  // slice with no args will take full deep copy of the array





----------------------------------------------------------------------------------------------
# day15: Local Storage and Event Delegation
> Local Storage: refresh page, still persists state

> Event Delegation: 'future' event listeners


- forms and submit button
- 'preserve log' in dev pane
  Navigated to http://localhost:63342/JavaScript30/15%20-%20LocalStorage/index-START.html?item=hiya
- page refreshed after submit


> js returning HTML: use backticks!!
> ternary JS operators in the backticks `${ ? lakj;l}`

> console.table(items);

> css: `label:before`

console.log(localStorage)
LocalStorage in chrome devtools Application
key-value pair.
-> can only use strings!!

https://www.w3schools.com/css/css_selectors.asp

| Selector           | Example    | Example description                             |
|--------------------|------------|-------------------------------------------------|
| #id                | #firstname | Selects the element with id="firstname"         |
| .class             | .intro     | Selects all elements with class="intro"         |
| element.class      | p.intro    | Selects only <p> elements with class="intro"    |
| [data-time]        | [data-time]| Selects only elements with data-time attribute  |
| *                  | *          | Selects all elements                            |
| element            | p          | Selects all <p> elements                        |
| element,element,.. | div, p     | Selects all <div> elements and all <p> elements |

----------------------------------------------------------------------------------------------
# day16: mousemoves, leading to effect shadow

some adjustment of the mousemove necessary because nested elements

--------------------------------------------------------------------------------------------
# day17: sorting band names, without definite articles (e.g. An, A...)

- stripping out the article
  The, An or A

- JS REGEX to strip the article
  ```js 
  function strip(bandName) {
  bandName.replace(/^(a|the|an )/i, '').trim();
  }
  
  // OR oneliner using implicit return
  ```

- the reason for `.join('')` after setting `<DOM ELEMENT>.innerHTML`
DOM calls `.tostring()` on array, which includes the array's commas
  

CTRL + B to set/unset breakpoints in dev tools


--------------------------------------------------------------------------------------------
# day18:,

- correct array destructuring syntax
let [minutes, seconds] = listItem.dataset.time.split(':');

- querySelectorAll returns a NodeList, NOT an array

- data types of things in devtools console:
    black -> strings
  
----------------------------------------------------------------------------------------------
# day19:,
----------------------------------------------------------------------------------------------
# day20:,
----------------------------------------------------------------------------------------------
# day21:,
----------------------------------------------------------------------------------------------
# day22:,
----------------------------------------------------------------------------------------------
# day23:,
----------------------------------------------------------------------------------------------
# day24:,
----------------------------------------------------------------------------------------------
# day25:,
----------------------------------------------------------------------------------------------
# day26:,
----------------------------------------------------------------------------------------------
# day27:,
----------------------------------------------------------------------------------------------
# day28:,
----------------------------------------------------------------------------------------------
# day29:,
----------------------------------------------------------------------------------------------
# day30:
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
