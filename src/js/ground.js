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
const cellSizeOver2 = cellSize / 2;
const cellCountX = 40;
const cellCountY = 10;

canvas.width = cellSize * cellCountX;
canvas.height = cellSize * cellCountY;

const charArrData = {
  /**
   * 0 |   0 1 2 3 4 5 6
   * --+----------------
   *   |
   * 0 |   1 1 1 1 1 1 1
   * 1 |   1 1 1 1 1 1 1
   * 2 |   1 1 0 0 0 1 1
   * 3 |   1 1 0 0 1 1 1
   * 4 |   1 1 0 1 0 1 1
   * 5 |   1 1 0 1 0 1 1
   * 6 |   1 1 1 0 0 1 1
   * 7 |   1 1 0 0 0 1 1
   * 8 |   1 1 1 1 1 1 1
   * 9 |   1 1 1 1 1 1 1
   */
  0: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
    [1, 1, 0, 1, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ],

  /**
   * 1 |   0 1 2 3 4 5
   * --+--------------
   *   |
   * 0 |   0 0 1 1 0 0
   * 1 |   0 1 1 1 0 0
   * 2 |   1 1 1 1 0 0
   * 3 |   0 0 1 1 0 0
   * 4 |   0 0 1 1 0 0
   * 5 |   0 0 1 1 0 0
   * 6 |   0 0 1 1 0 0
   * 7 |   0 0 1 1 0 0
   * 8 |   1 1 1 1 1 1
   * 9 |   1 1 1 1 1 1
   */
  1: [
    [0, 0, 1, 0, 0, 0, 0, 0, 1, 1],
    [0, 1, 1, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  ],

  /**
   * 2 |   0 1 2 3 4 5 6
   * --+----------------
   *   |
   * 0 |   1 1 1 1 1 1 1
   * 1 |   1 1 1 1 1 1 1
   * 2 |   0 0 0 0 0 1 1
   * 3 |   0 0 0 0 0 1 1
   * 4 |   1 1 1 1 1 1 1
   * 5 |   1 1 1 1 1 1 1
   * 6 |   1 1 0 0 0 0 0
   * 7 |   1 1 0 0 0 0 0
   * 8 |   1 1 1 1 1 1 1
   * 9 |   1 1 1 1 1 1 1
   */
  2: [
    [1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
    [1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
    [1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 1],
  ],

  /**
   * 3 |   0 1 2 3 4 5 6
   * --+----------------
   *   |
   * 0 |   1 1 1 1 1 1 1
   * 1 |   1 1 1 1 1 1 1
   * 2 |   0 0 0 0 0 1 1
   * 3 |   0 0 0 0 0 1 1
   * 4 |   1 1 1 1 1 1 1
   * 5 |   1 1 1 1 1 1 1
   * 6 |   0 0 0 0 0 1 1
   * 7 |   0 0 0 0 0 1 1
   * 8 |   1 1 1 1 1 1 1
   * 9 |   1 1 1 1 1 1 1
   */
  3: [
    [1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
    [1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
    [1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
    [1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
    [1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ],

  /**
   * 4 |   0 1 2 3 4 5 6
   * --+----------------
   *   |
   * 0 |   1 1 0 0 0 1 1
   * 1 |   1 1 0 0 0 1 1
   * 2 |   1 1 0 0 0 1 1
   * 3 |   1 1 0 0 0 1 1
   * 4 |   1 1 1 1 1 1 1
   * 5 |   1 1 1 1 1 1 1
   * 6 |   0 0 0 0 0 1 1
   * 7 |   0 0 0 0 0 1 1
   * 8 |   0 0 0 0 0 1 1
   * 9 |   0 0 0 0 0 1 1
   */
  4: [
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ],

  /**
   * 5 |   0 1 2 3 4 5 6
   * --+----------------
   *   |
   * 0 |   1 1 1 1 1 1 1
   * 1 |   1 1 1 1 1 1 1
   * 2 |   1 1 0 0 0 0 0
   * 3 |   1 1 0 0 0 0 0
   * 4 |   1 1 1 1 1 1 1
   * 5 |   1 1 1 1 1 1 1
   * 6 |   0 0 0 0 0 1 1
   * 7 |   0 0 0 0 0 1 1
   * 8 |   1 1 1 1 1 1 1
   * 9 |   1 1 1 1 1 1 1
   */
  5: [
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 1],
    [1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
    [1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
    [1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
    [1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
  ],

  /**
   * 6 |   0 1 2 3 4 5 6
   * --+----------------
   *   |
   * 0 |   1 1 1 1 1 1 1
   * 1 |   1 1 1 1 1 1 1
   * 2 |   1 1 0 0 0 0 0
   * 3 |   1 1 0 0 0 0 0
   * 4 |   1 1 1 1 1 1 1
   * 5 |   1 1 1 1 1 1 1
   * 6 |   1 1 0 0 0 1 1
   * 7 |   1 1 0 0 0 1 1
   * 8 |   1 1 1 1 1 1 1
   * 9 |   1 1 1 1 1 1 1
   */
  6: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
    [1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
    [1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
    [1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
  ],

  /**
   * 7 |  0 1 2 3 4
   * --+-----------
   *   |
   * 0 |  1 1 1 1 1
   * 1 |  1 1 1 1 1
   * 2 |  0 0 0 1 1
   * 3 |  0 0 0 1 1
   * 4 |  0 0 0 1 1
   * 5 |  0 0 0 1 1
   * 6 |  0 0 0 1 1
   * 7 |  0 0 0 1 1
   * 8 |  0 0 0 1 1
   * 9 |  0 0 0 1 1
   */
  7: [
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ],
};

let nullMatrix = [];

for (let i = 0; i < cellCountY; i++) {
  nullMatrix.push(0);
}

let gapMatrix = [];

for (let i = 0; i < cellCountX + 1; i++) {
  gapMatrix.push(nullMatrix);
}

let textDataArr;

const resetTextArr = () => {
  let textStrArr = textInputElem.value
    .split('')
    .filter(char => char in charArrData);

  textDataArr = [...gapMatrix];

  for (let i = 0; i < textStrArr.length; i++) {
    textDataArr.push(...charArrData[textStrArr[i]], nullMatrix);
  }

  textDataArrOffset = 0;
};

let bulbRadius = cellSize / 4;
let bulbOffColor = '#f001';
let bulbOnColor = '#f00';
let bulbConfigArr = [];

for (let i = 0; i < cellCountX; i++) {
  bulbConfigArr[i] = [];

  for (let j = 0; j < cellCountY; j++) {
    bulbConfigArr[i][j] = {
      x: i * cellSize + cellSizeOver2,
      y: j * cellSize + cellSizeOver2,
    };
  }
}

let textDataArrOffset = 0;
let twoPi = Math.PI * 2;
const dispScrollSpeed = 10;

const renderDisp = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);

  let charDataArrOffset = textDataArrOffset;

  for (let i = 0; i < cellCountX; i++) {
    for (let j = 0; j < textDataArr[charDataArrOffset].length; j++) {
      context.fillStyle = textDataArr[charDataArrOffset][j]
        ? bulbOnColor
        : bulbOffColor;

      const bulbConfig = bulbConfigArr[i][j];

      context.beginPath();
      context.arc(bulbConfig.x, bulbConfig.y, bulbRadius, 0, twoPi);
      context.fill();
    }

    charDataArrOffset++;
    charDataArrOffset =
      charDataArrOffset === textDataArr.length ? 0 : charDataArrOffset;
  }

  textDataArrOffset++;
  textDataArrOffset =
    textDataArrOffset === textDataArr.length ? 0 : textDataArrOffset;

  setTimeout(renderDisp, 1000 / dispScrollSpeed);
};

const initGround = () => {
  resetTextArr();
  renderDisp();
};
