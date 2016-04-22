/**
 * Created by maxit on 4/22/2016.
 */
'use strict';
var inputFile = document.getElementById('file');
var inputOpacityFilter = document.getElementById('opacity');
var spanOpacityValue = document.getElementById('opacity-value');
var media = $('.holder-selected-media');
var overlay;
var opacityValue = 1;
var $preview = $('#preview-media');
inputFile.addEventListener('change', (event)=> {
  if (inputFile.files && inputFile.files.length > 0) {
    let file = inputFile.files[0];
    var reader = new FileReader();
    reader.onload = (e)=> {
      $preview.attr('src', e.target.result);
      console.log($('body'), document);
      $('body').append($preview.clone());
    };
    reader.readAsDataURL(file);
  }
});

inputOpacityFilter.addEventListener('change', opacityValueChanged);
inputOpacityFilter.addEventListener('input', opacityValueChanged);


function opacityValueChanged(event) {
  //TODO get the input value and set opacity to the overlay
  opacityValue = $(inputOpacityFilter).val();
  spanOpacityValue.innerHTML = opacityValue;
  media.css({opacity: opacityValue / 100})

}
