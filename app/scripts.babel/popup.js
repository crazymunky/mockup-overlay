/**
 * Created by maxit on 4/22/2016.
 */
'use strict';
var inputFile = document.getElementById('file');
var inputOpacityFilter = document.getElementById('opacity');
var spanOpacityValue = document.getElementById('opacity-value');
var overlay;
var opacityValue = 1;
inputFile.addEventListener('change', (event)=> {
  if (inputFile.files && inputFile.files.length > 0) {
    let file = inputFile.files[0];
    console.log(file);
  }
});

inputOpacityFilter.addEventListener('change', (event)=> {
  //TODO get the input value and set opacity to the overlay
  opacityValue = inputFile.value();
  spanOpacityValue.innerHTML = opacityValue;
});
