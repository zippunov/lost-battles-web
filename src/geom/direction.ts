'use strict';

export default class Direction {
    static LEFT: Direction = new Direction(-1, 0);
    static TOP: Direction = new Direction(0, -1);
    static RIGHT: Direction = new Direction(1, 0);
    static DOWN: Direction = new Direction(0, 1);
    static directions: Array<Direction> = [
        Direction.LEFT,
        Direction.TOP,
        Direction.RIGHT,
        Direction.DOWN
    ];

    readonly dx: number;
    readonly dy: number;
    cv: Direction;
    ccv: Direction;

    constructor(dx, dy) {
        this.dx = dx;
        this.dy = dy;
    }

    /**
     * Clockwise rotation is positive, counterclockwise is negative
     * 
     * @param {number} turn 
     * @returns {Direction} 
     * @memberof Direction
     */
    rotate(turn: number): Direction {
        const currentIndex = Direction.directions.indexOf(this);
        const targetIndex = (currentIndex + turn) % 4;
        const resolvedIndex = targetIndex < 0 ? targetIndex + 4 : targetIndex;
        return Direction.directions[resolvedIndex];
    }
}

 