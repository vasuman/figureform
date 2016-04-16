import h from 'hyperscript';

import {State} from 'webgame-lib/lib/states';
import Screen from 'webgame-lib/lib/screen';

import {newScreen} from './common.js';
import Game from './game.jsx';

export default class Start extends State {
  constructor() {
    super();
    this.screen = newScreen();
    this.screen.overlay.appendChild(this._interface());
    this.startGame = false;
  }

  setup() {
    this.screen.show();
  }

  _interface() {
    return (
      <div className="screen start">
        <button onclick={() => { this.startGame = true; }}> Start </button>
      </div>
    );
  }

  tick(transition) {
    if (this.startGame) {
      transition(new Game());
      this.startGame = false;
    }
  }

  teardown() {
    this.screen.hide();
  }

}
