(() => {
  // load app css
  const appCSSFile = document.createElement('link');
  appCSSFile.href = './css/app.css';
  appCSSFile.rel = 'stylesheet';

  // start load
  document.head.appendChild(appCSSFile);
})();

const $app = document.getElementById('app');
const $appBody = document.getElementById('app-body');
const $appIntro = document.getElementById('app-intro');
const $appName = document.getElementById('app-name');
const $appPlayBtnCont = document.querySelector('#app .play-btn-cont');
const $appGround = document.getElementById('app-ground');
const $appFooter = document.getElementById('app-footer');

const $playBtn = document.getElementById('play-btn');

const showApp = () => {
  $app.show();
  $appIntro.show();
  $appName.show();
  $appPlayBtnCont.show();
  $appFooter.show();
};

const showGround = () => {
  $appName.hide();
  $appPlayBtnCont.hide(() => {
    $appIntro.hide();
    $appGround.show();
  });
};

$playBtn.addEventListener('click', showGround);
