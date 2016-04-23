/**
 * Created by maxit on 4/22/2016.
 */
'use strict';

console.log('popup.js loaded');
console.log('jquery loaded?', $);
class Popup {
  constructor() {
    console.log('Popup constructor');
    this.popupAppHolder = $('#popup-app');
    this.views = {
      holderControls: this.popupAppHolder.find('.holder-controls'),
      inputFile: this.popupAppHolder.find('#file'),
      inputOpacityFilter: this.popupAppHolder.find('#opacity'),
      spanOpacityValue: this.popupAppHolder.find('#opacity-value'),
      holderMedia: this.popupAppHolder.find('.holder-media'),
      overlay: this.popupAppHolder.find()
    };
    this.mediaLastId = -1;
    this.selectedMediaId = -1;

    //listen for eventsreally
    this.views.inputFile.change(this.fileChange.bind(this));
    this.views.inputOpacityFilter.on('input', this.opacityValueChanged.bind(this));
  }

  fileChange(event) {
    var myFile = this.views.inputFile.prop('files');
    console.log('get the file', myFile);
    if (myFile && myFile.length > 0) {
      console.log('i have files');
      var file = myFile[0];
      var reader = new FileReader();
      reader.onload = (e) => {
        let image = new Image();
        image.src = e.target.result;
        image.id = 'media-' + (++this.mediaLastId);
        this.selectedMediaId = image.id;
        this.views.holderMedia.append(image);
        this.getSelectedMedia().css({
          'z-index': this.selectedMediaId
        });
      };
      reader.readAsDataURL(file);
    }
  }

  toggleControls() {
    console.log(this.views);
    this.views.holderControls.toggleClass('show');
  }

  toggleApp() {
    this.popupAppHolder.toggleClass('show');
    this.toggleControls();
  }

  opacityValueChanged(event) {
    console.log(event.target.value);
    this.updateProps({opacity: event.target.value / 100});
  }

  getSelectedMedia() {
    console.log('getting selected media', this.selectedMediaId, this.views.holderMedia.find('#' + this.selectedMediaId));
    return this.views.holderMedia.find('#' + this.selectedMediaId);
  }

  /**
   * props.opacity,  * props.x,   * props.y   * props.width   * props.height
   */
  updateProps(props) {
    //TODO implement the other props
    //TODO implement but with this.mediaSelect, should point to the current media once multi media support is added
    let $selectedMedia = this.getSelectedMedia();
    console.log('update props on', $selectedMedia, 'with ', props);
    this.views.spanOpacityValue.html(Math.round(props.opacity * 100));
    $selectedMedia.css({opacity: props.opacity});
  }
}
;