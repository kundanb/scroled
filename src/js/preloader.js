/** @type {HTMLElement} */
const $preloader = document.getElementById('preloader');

/** @type {HTMLElement} */
const $preloaderBrandCont = document.querySelector('#preloader .brand-cont');

window.addEventListener('load', () => {
  $preloaderBrandCont.hide(() => {
    $preloader.hide();
  });
});
