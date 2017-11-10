'use strict';
require('pixi');
require('p2');
require('phaser');

import 'styles/style.styl';
import BootState from './states/boot_state';
import PreloaderState from './states/preloader_state';
import MainState from './states/main_state';


export default class App extends Phaser.Game {
  constructor(config: Phaser.IGameConfig) {
    super(config);
    this.state.add('boot', BootState);
    this.state.add('preloader', PreloaderState);
    this.state.add('main', MainState);
    this.state.start('boot');
  }
}


if (!module.parent) {
  window.onload = () => {
    const config: Phaser.IGameConfig = {
      width: 800,
      height: 600,
      renderer: Phaser.AUTO,
      parent: 'ui',
      resolution: 1,
      forceSetTimeOut: false
    };

    new App(config);
  };
}
