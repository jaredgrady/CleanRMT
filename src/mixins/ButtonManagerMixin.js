var React = require('react');

var ButtonManagerMixin = {
  iconsProviderName: null,

  setIconsProvider: function(name) {
    this.iconsProviderName = name;
  },

  isFontAwesome: function() {
    return this.iconsProviderName === 'font-awesome';
  },

  getStyleMarkdownBtn: function() {
    return {
      'flex': '1',
      'maxWidth': '50px',
      'border': '1px solid #ddd',
      'backgroundColor': 'white',
      'borderRadius': '4px',
      'margin': '0 2px',
      'padding': '2px 3px',
      'cursor': 'pointer',
      'display': 'flex',
      'justifyContent': 'center',
      'alignItems': 'center'
    };
  },

  getBoldButton: function(isDisabled, onClickHandler) {
    var _style = this.getStyleMarkdownBtn();
    if (this.isFontAwesome()) {
      return this.getButtonFontAwesomeIcon(isDisabled, onClickHandler, _style, 'fa-bold', 'bold-btn');
    } else {
      return this.getButtonMaterializeIcon(isDisabled, onClickHandler, _style, 'format_bold', 'bold-btn');
    }
  },

  getButtonMaterializeIcon: function(isDisabled, onClickHandler, styleBtn, iconName, containerClassName) {
    return (
      React.createElement('div', {role: 'button', className: containerClassName, style: styleBtn, disabled: isDisabled, onClick: onClickHandler},
        React.createElement('i', {className: 'material-icons'}, iconName)
      )
    );
  },

  getButtonFontAwesomeIcon: function(isDisabled, onClickHandler, styleBtn, iconName, containerClassName) {
    var _className = 'fa ' + iconName;
    return (
      React.createElement('div', {role: 'button', className: containerClassName, style: styleBtn, disabled: isDisabled, onClick: onClickHandler},
        React.createElement('i', {className: _className})
      )
    );
  },

  getButtonWithoutIcon: function(isDisabled, onClickHandler, additionalClassName, textBtn) {
    var styleBtn = {
      'display': 'flex',
      'minWidth': '50px',
      'border': '1px solid #ddd',
      'color': 'black',
      'backgroundColor': 'white',
      'borderRadius': '4px',
      'margin': '0 2px',
      'padding': '2px 3px',
      'cursor': 'pointer',
      'textAlign': 'center',
      'justifyContent': 'flex-end',
      'alignItems': 'center'
    };

    return (
      React.createElement('div', {role: 'button', style: styleBtn, className: additionalClassName, disabled: isDisabled, onClick: onClickHandler},
        React.createElement('span', null, textBtn)
      )
    );
  },

  getItalicButton: function(isDisabled, onClickHandler) {
    var _italicbuttonstyle;
    if (this.isFontAwesome()) {
      _italicbuttonstyle = this.getStyleMarkdownBtn();
      return this.getButtonFontAwesomeIcon(isDisabled, onClickHandler, _italicbuttonstyle, 'fa-italic', 'italic-btn');
    } else {
      _italicbuttonstyle = this.getStyleMarkdownBtn();
      return this.getButtonMaterializeIcon(isDisabled, onClickHandler, _italicbuttonstyle, 'format_italic', 'italic-btn');
    }
  },

  getMakeListButton: function(isDisabled, onClickHandler) {
    var _listbuttonstyle;
    if (this.isFontAwesome()) {
      _listbuttonstyle = this.getStyleMarkdownBtn();
      return this.getButtonFontAwesomeIcon(isDisabled, onClickHandler, _listbuttonstyle, 'fa-list-ul', 'list-btn');
    } else {
      _listbuttonstyle = this.getStyleMarkdownBtn();
      return this.getButtonMaterializeIcon(isDisabled, onClickHandler, _listbuttonstyle, 'format_list_bulleted', 'list-btn');
    }
  },

  getImageButton: function(isDisabled, onClickHandler) {
    var _imagebuttonstyle;
    if (this.isFontAwesome()) {
      _imagebuttonstyle = this.getStyleMarkdownBtn();
      return this.getButtonFontAwesomeIcon(isDisabled, onClickHandler, _imagebuttonstyle, 'fa-file-image-o', 'insert-img-btn');
    } else {
      _imagebuttonstyle = this.getStyleMarkdownBtn();
      return this.getButtonMaterializeIcon(isDisabled, onClickHandler, _imagebuttonstyle, 'insert_photo', 'insert-img-btn');
    }
  },

  getLinkButton: function(isDisabled, onClickHandler) {
    var _linkbuttonstyle;
    if (this.isFontAwesome()) {
      _linkbuttonstyle = this.getStyleMarkdownBtn();
      return this.getButtonFontAwesomeIcon(isDisabled, onClickHandler, _linkbuttonstyle, 'fa-link', 'insert-link-btn');
    } else {
      _linkbuttonstyle = this.getStyleMarkdownBtn();
      return this.getButtonMaterializeIcon(isDisabled, onClickHandler, _linkbuttonstyle, 'insert_link', 'insert-link-btn');
    }
  }
};

module.exports = ButtonManagerMixin;
