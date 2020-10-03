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
const $appFooter = document.getElementById('app-footer');

const showApp = () => {
  $app.show();
  $appBody.show();
  $appFooter.show();
};
