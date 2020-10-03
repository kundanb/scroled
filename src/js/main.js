const transDur = 200;

/** @param {Function} [callback] */
HTMLElement.prototype.show = function (callback = null) {
  this.classList.remove('hid');

  if (this.classList.contains('det')) {
    callback && callback();
  } else {
    setTimeout(callback, transDur);
  }
};

/** @param {Function} [callback] */
HTMLElement.prototype.hide = function (callback = null) {
  this.classList.add('hid');

  if (this.classList.contains('det')) {
    callback && callback();
  } else {
    setTimeout(callback, transDur);
  }
};

// load font css
const fontCSSFile = document.createElement('link');
fontCSSFile.href =
  'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap';
fontCSSFile.rel = 'stylesheet';

// start load
document.head.appendChild(fontCSSFile);
