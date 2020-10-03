const ninjahost = require('ninjahost');
const { resolve } = require('path');

const dir = resolve(__dirname, '..', 'build');

ninjahost(dir);
