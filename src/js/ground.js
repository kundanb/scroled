(() => {
  // load ground css
  const groundCSSFile = document.createElement('link');
  groundCSSFile.href = './css/ground.css';
  groundCSSFile.rel = 'stylesheet';

  // start load
  document.head.appendChild(groundCSSFile);
})();

/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas');

/** @type {CanvasRenderingContext2D} */
const context = canvas.getContext('2d');

/** @type {HTMLInputElement} */
const textInputElem = document.querySelector('#ground .text-input-cont input');

const cellSize = 10;
const cellCenter = cellSize / 2;
const cellCountX = 40;
const cellCountY = 10;

canvas.width = cellSize * cellCountX;
canvas.height = cellSize * cellCountY;
