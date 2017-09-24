'use strict';

export default class Terrain {
    static FortifiedCamp = new Terrain('FC', 'Fortified Camp');
    static UnforifiedCamp = new Terrain('UC', 'Unfortified Camp');
    static Hill = new Terrain('H', 'Hill');
    static Clear = new Terrain('C', 'Clear');
    static Stream = new Terrain('S', 'Stream');
    static Wood = new Terrain('W', 'Wood');
    static River = new Terrain('R', 'River');
    static Marsh = new Terrain('M', 'Marsh');
    static Impassable = new Terrain('I', 'Impassable');
    static Shoreline = new Terrain('SH', 'Shoreline');

    readonly code: string;
    readonly name: string;

    constructor(code: string, name: string) {
        this.code = code;
        this.name = name;
    }
}
