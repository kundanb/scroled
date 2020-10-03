window.addEventListener('load', () => {
  hidePreloader(showApp);

  $playBtn.addEventListener('click', () => {
    showGround(initGround);
  });
});
