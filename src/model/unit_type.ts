'use strict';

import TroopType from './troop_type';

export default class UnitType {
    static HI = new UnitType('HI', 'Heavy Infantry', null, TroopType.Infantry);
    static HO = new UnitType('HO', 'Hoplites', UnitType.HI, TroopType.Infantry);
    static AR = new UnitType('AR', 'Archers', UnitType.HI, TroopType.Infantry);
    static PH = new UnitType('PH', 'Phalangites', UnitType.HI, TroopType.Infantry);
    static LE = new UnitType('LE', 'Legionaries', UnitType.HI, TroopType.Infantry);
    static LI = new UnitType('LI', 'Light Infantry', null, TroopType.Infantry);
    static HC = new UnitType('HC', 'Heavy Cavalry', null, TroopType.Cavalry);
    static CA = new UnitType('CA', 'Cataphracts', UnitType.HC, TroopType.Cavalry);
    static LC = new UnitType('LC', 'Light Cavalry', null, TroopType.Cavalry);
    static EL = new UnitType('EL', 'Elephants', null, TroopType.Elephants);
    static CH = new UnitType('CH', 'Chariots', null, TroopType.Chariots);


    readonly name: string;
    readonly code: string;
    readonly troops: TroopType;
    readonly parent: UnitType | null;
    
    constructor(code: string, name: string, parent: UnitType | null, troops: TroopType) {
        this.code = code;
        this.name = name;
        this.parent = parent;
        this.troops = troops;
    }

    is(type: UnitType): boolean {
        return this === type || (this.parent && this.parent.is(type));
    }
}
