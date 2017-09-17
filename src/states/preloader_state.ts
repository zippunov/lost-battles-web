'use strict';
import AbstractState from './abstract_state';

export default class PreloaderState extends AbstractState {
    preload(): void {
        console.debug('Assets loading started');
    }

    create(): void {
        console.debug('Assets loading completed');
        this.game.state.start('main');
    }
}
