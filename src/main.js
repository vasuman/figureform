// TODO: seperate lib imports
import {Screen, Loop, states} from 'webgame-lib';

import Start from './start.jsx';
import {init, getLoop} from './common.js';

import '../styles/main.css';

const options = {
  width: 800,
  height: 600
};

function main() {
  console.clear();
  options.container = document.getElementById('game-container');
  init(options);
  let start = new Start();
  let loop = getLoop();
  let dispatcher = new states.Dispatcher(loop);
  loop.on('start', () => {
    dispatcher.transition(start);
  });
  loop.start();
}

window.addEventListener('load', main);
