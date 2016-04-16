import Screen from 'webgame-lib/lib/screen';
import Assets from 'webgame-lib/lib/assets';
import Loop from 'webgame-lib/lib/loop';

let assets, loop, dispatcher, options;

export function init(opt) {
  assets = new Assets();
  loop = new Loop();
  options = opt;
}

export function getAssets() {
  return assets;
}

export function getLoop() {
  return loop;
}

export function newScreen() {
  console.log(options);
  let screen = new Screen(options.width, options.height);
  screen.addTo(options.container);
  return screen;
}
