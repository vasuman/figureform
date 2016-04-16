import h from 'hyperscript';

import {State} from 'webgame-lib/lib/states';
import Screen from 'webgame-lib/lib/screen';

import {newScreen} from './common.js';

export default class Game extends State {
  constructor() {
    super();
    this.screen = newScreen();
    this.i = 0;
  }

  setup() {
    this.screen.show();
  }

  tick() {
    this.screen.clear();
    let ctx = this.screen.getContext();
    ctx.fillRect(this.i, this.i, 10, 10);
    this.i++;
  }
}
