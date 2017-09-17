'use strict';

import AbstractState from './abstract_state';

export default class BootState extends AbstractState {
    create(): void {
        this.game.state.start('preloader');
    }
}
