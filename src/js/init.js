window.addEventListener('load', () => {
  hidePreloader(showApp);

  $playBtn.addEventListener('click', () => {
    showGround(initGround);
  });

  textInputElem.addEventListener('change', resetTextArr);
});
