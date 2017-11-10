'use strict';

export default class UnitClass {
    public static VETERAN = new UnitClass('V', 'Veteran');
    public static AVERAGE = new UnitClass('A', 'Average');
    public static LEVY = new UnitClass('L', 'Levy');
    public static AFRICAN = new UnitClass('A', 'African');
    public static INDIAN = new UnitClass('I', 'Indian');
    public static SCYTHED = new UnitClass('S', 'Scythed');

    readonly code: string;
    readonly name: string;
    constructor(code: string, name : string) {
        this.code = code;
        this.name = name;
    }
}
