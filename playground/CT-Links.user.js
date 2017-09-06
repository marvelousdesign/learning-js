// ==UserScript==
// @name        CT Links
// @namespace   CT Links by MLuong
// @description Iterate/appends links after the 5th page "[ 5 ]" link through .pagination
// @include     http://www.mycouchtuner.ag/*
// @include     http://mycouchtuner.ag/*
// @include     http://www.couchtuner.io/*
// @include     http://couchtuner.io/*
// @version     1
// @grant       none
// ==/UserScript==
// Dom ref http://xahlee.info/js/scripting_web_index.html

var n = 6;

function iterateLinks() {
  var newNode = document.createElement('a');                // create the element
  var text = document.createTextNode(' [ ' + n + ' ]');     // add some text
  newNode.setAttribute('href', '/page/' + n + '/');         // add the URL attribute
  newNode.appendChild(text);                                // add it to the new hyperlink
  var list = document.getElementsByClassName("pagination"); // get the element by class name
  var brs = list[0].getElementsByTagName("br");             // get the element by tag name
  while (brs.length) {                                      // while loop checks for <br>'s and executes
    brs[0].parentNode.removeChild(brs[0]);                  // removes <br>'s from pagination class
  }
  list[0].style.color = 'red';                              // styled to see if it's working..
  list[0].style.fontWeight = 'bold';                        // & to match the other links
  list[0].appendChild(newNode);                             // append child
}

for (var i = 0; i < n; i++) {
  if (n <= 15) {
    iterateLinks();
    n++;
  } 
}

//  7 = 1 week ago
//  9 = 2 weeks ago
// 15 = 3 weeks ago
