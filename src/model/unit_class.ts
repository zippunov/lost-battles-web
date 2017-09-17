'use strict';

export default class UnitClass {
    public static Veteran = new UnitClass('V', 'Veteran');
    public static Average = new UnitClass('A', 'Average');
    public static Levy = new UnitClass('L', 'Levy');
    public static African = new UnitClass('A', 'African');
    public static Indian = new UnitClass('I', 'Indian');
    public static Scythed = new UnitClass('S', 'Scythed');

    readonly code: string;
    readonly name: string;
    constructor(code: string, name : string) {
        this.code = code;
        this.name = name;
    }
}
