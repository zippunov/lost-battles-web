'use strict';

import UnitType from './unit_type';
import UnitClass from './unit_class';
import UnitStatus from './unit_status';

const { HI, HO, AR, PH, LE, LI, HC, CA, LC, EL, CH } = UnitType;
const { Veteran, Average, Levy, African, Indian, Scythed } = UnitClass;

export default class Unit {
    readonly type: UnitType;
    readonly unitClass: UnitClass;
    status: UnitStatus;

    constructor(unitClass: UnitClass, type: UnitType) {
        this.unitClass = unitClass;
        this.type = type;
        this.status = UnitStatus.Fresh;
    }

    get code(): string {
        return `${this.unitClass.code}${this.type.code}`;
    }

    get name(): string {
        return `${this.unitClass.name} ${this.type.name}`;
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
}