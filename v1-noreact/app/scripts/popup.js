/**
 * Created by maxit on 4/22/2016.
 */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log('popup.js loaded');
console.log('jquery loaded?', $);

var Popup = function () {
  function Popup() {
    var _this = this;

    _classCallCheck(this, Popup);

    console.log('Popup constructor');
    this.popupAppHolder = $('#popup-app');
    this.views = {
      holderControls: this.popupAppHolder.find('.holder-controls'),
      inputFile: this.popupAppHolder.find('#file'),
      inputOpacityFilter: this.popupAppHolder.find('#opacity'),
      spanOpacityValue: this.popupAppHolder.find('#opacity-value'),
      holderMedia: this.popupAppHolder.find('.holder-media'),
      overlay: this.popupAppHolder.find(),
      btnMinimize: this.popupAppHolder.find('.btn.minimize')
    };
    this.mediaLastId = -1;
    this.selectedMediaId = -1;

    this.views.holderControls.draggable();
    //listen for eventsreally
    this.views.inputFile.change(this.fileChange.bind(this));
    this.views.inputOpacityFilter.on('input', this.opacityValueChanged.bind(this));
    this.views.btnMinimize.click(function (e) {
      _this.views.holderControls.addClass('minimized');
      e.preventDefault();
      e.stopPropagation();
      _this.popupAppHolder.one('click', function (e) {
        console.log('click', e.target, _this.views.holderControls);
        _this.views.holderControls.removeClass('minimized');
      });
    });
  }

  _createClass(Popup, [{
    key: 'fileChange',
    value: function fileChange(event) {
      var _this2 = this;

      var myFile = this.views.inputFile.prop('files');
      console.log('get the file', myFile);
      if (myFile && myFile.length > 0) {
        console.log('i have files');
        var file = myFile[0];
        var reader = new FileReader();
        reader.onload = function (e) {
          var image = new Image();
          image.src = e.target.result;
          image.id = 'media-' + ++_this2.mediaLastId;
          _this2.selectedMediaId = image.id;
          _this2.views.holderMedia.empty();
          _this2.views.holderMedia.append(image);
          _this2.getSelectedMedia().css({
            'z-index': _this2.selectedMediaId
          });
        };
        reader.readAsDataURL(file);
      }
    }
  }, {
    key: 'toggleControls',
    value: function toggleControls() {
      console.log(this.views);
      this.views.holderControls.toggleClass('show');
    }
  }, {
    key: 'toggleApp',
    value: function toggleApp() {
      this.popupAppHolder.toggleClass('show');
      this.toggleControls();
    }
  }, {
    key: 'opacityValueChanged',
    value: function opacityValueChanged(event) {
      console.log(event.target.value);
      this.updateProps({ opacity: event.target.value / 100 });
    }
  }, {
    key: 'getSelectedMedia',
    value: function getSelectedMedia() {
      console.log('getting selected media', this.selectedMediaId, this.views.holderMedia.find('#' + this.selectedMediaId));
      return this.views.holderMedia.find('#' + this.selectedMediaId);
    }

    /**
     * props.opacity,  * props.x,   * props.y   * props.width   * props.height
     */

  }, {
    key: 'updateProps',
    value: function updateProps(props) {
      //TODO implement the other props
      //TODO implement but with this.mediaSelect, should point to the current media once multi media support is added
      var $selectedMedia = this.getSelectedMedia();
      console.log('update props on', $selectedMedia, 'with ', props);
      this.views.spanOpacityValue.html(Math.round(props.opacity * 100));
      $selectedMedia.css({ opacity: props.opacity });
    }
  }]);

  return Popup;
}();

;