'use strict';

import Unit from './unit';

export default class Group {
    readonly units: Array<Unit>;
    private _lead: Unit;

    constructor() {
        this.units = [];
        this._lead = null;
    }

    set lead(unit: Unit) {
        const found = this.units.reduce((r, u) => r || (u === unit), false);
        if (found) {
            this._lead = unit;
        } else {
            console.error(`Unit ${unit.code} is not part of the group`);
        }
    }

    get lead(): Unit {
        return this._lead;
    }
}
