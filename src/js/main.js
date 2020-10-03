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
