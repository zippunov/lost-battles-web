'use strict';

import AbstractState from './abstract_state';

export default class MainState extends AbstractState {
    create(): void {
        console.debug('Main state');
    }
}
