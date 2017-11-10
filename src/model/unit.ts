'use strict';

import UnitType from './unit_type';
import UnitClass from './unit_class';
import UnitStatus from './unit_status';
import TroopType from './troop_type';
import UnitState from './unit_state';

const { Infantry, Cavalry, Chariots, Elephants } = TroopType;
const { HI, HO, AR, PH, LE, LI, HC, CA, LC, EL, CH } = UnitType;
const { Veteran, Average, Levy, African, Indian, Scythed } = UnitClass;

export default class Unit {
    readonly type: UnitType;
    readonly unitClass: UnitClass;
    status: UnitStatus;
    state: UnitState;

    constructor(unitClass: UnitClass, type: UnitType) {
        this.unitClass = unitClass;
        this.type = type;
        this.status = UnitStatus.Fresh;
        this.resetState();
    }

    get code(): string {
        return `${this.unitClass.code}${this.type.code}`;
    }

    get name(): string {
        return `${this.unitClass.name} ${this.type.name}`;
    }

    get troops(): TroopType {
        return this.type.troops;
    }

    is(...types: Array<UnitType>): boolean {
        return types.reduce((r: boolean, t: UnitType) => {
            return r || this.type.is(t);
        }, false);
    }

    hasClass(...classes: Array<UnitClass>): boolean {
        return classes.reduce((r: boolean, c: UnitClass) => {
            return r || this.unitClass === c;
        }, false);
    }

    getStackingPoints(): number {
        return this.hasClass(Levy) ? 2 : 1;
    }
    
    getAttackPoints(lead: boolean = false): number {
        if (this.is(LE)) {
            return 1;
        }
        if (this.hasClass(Veteran) && this.is(HI, CA)) {
            return 0.5;
        }
        if (this.hasClass(Veteran) && this.is(LI, HC, LC)) {
            return 1;
        }
        if (this.is(HI, CA)) {
            return 1;
        }
        if (lead && this.is(EL)) {
            return 1;
        }
        if (lead && this.is(LI) && this.status === UnitStatus.Fresh) {
            return 1;
        }
        return 2;
    }

    getFightingValue(victoryPointCount: boolean = false): number {
        if(this.hasClass(Veteran)) {
            return 4;
        }
        if(this.hasClass(Levy)) {
            return 2;
        }
        if (this.is(LE) && !victoryPointCount) {
            return 4;
        }
        return 3;
    }

    get baseFreeFacingChange(): number {
        if (this.is(LI)) {
            return 1;
        }
        if (this.is(LC)) {
            return 2;
        }
        return 0;
    }

    get baseMovePoints(): number {
        if (this.troops === Infantry || this.troops === Elephants || this.is(CA)) {
            return 1;
        }
        return 2;
    }

    resetState(): void {
        this.state = new UnitState();
        this.state.movementPoints = this.baseMovePoints;
        this.state.freeFacingChange = this.baseFreeFacingChange;
    }
}
