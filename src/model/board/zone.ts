'use strict';

import Terrain from './terrain';
import ZoneType from './zone_type';


export default class Zone {
    readonly type: ZoneType;
    readonly terrain: Array<Terrain>;
    
}
