/** @type {HTMLElement} */
const $preloader = document.getElementById('preloader');

/** @type {HTMLElement} */
const $preloaderBrandCont = document.querySelector('#preloader .brand-cont');

/** @param {Function} [callback] */
const hidePreloader = (callback = null) => {
  $preloaderBrandCont.hide(() => {
    $preloader.hide(callback);
  });
};
