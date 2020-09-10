export class HairAccessory {
    private _name: string;
    private _plural: string;

    /**
     * @param {string} name
     * @param {string} plural
     */
    constructor(name: string, plural: string) {
        this._name = name;
        this._plural = plural;
    }

    get name() {
        return this._name;
    }

    get plural() {
        return this._plural;
    }
}

export class HairStyle {
    private _name: string;
    private _exclude: string[];
    private _plural: string | null;

    /**
     * @param {string} name
     * @param {string[]} exclude
     * @param {string?} plural
     */
    constructor(name: string, exclude: string[], plural: string | null = null) {
        this._name = name;
        this._exclude = exclude;
        this._plural = plural;
    }

    get name() {
        return this._name;
    }

    get exclude() {
        return this._exclude;
    }

    get plural() {
        return this._plural;
    }
}

export class ShortHairStyle extends HairStyle {
    /**
     * @param {string} name
     * @param {string?} plural
     */
    constructor(name: string, plural: string | null = null) {
        super(name, ["bald"], plural);
    }
}

export class NeckHairStyle extends HairStyle {
    /**
     * @param {string} name
     * @param {string?} plural
     */
    constructor(name: string, plural: string | null = null) {
        super(name, ["bald", "short"], plural);
    }
}

export class ShoulderHairStyle extends HairStyle {
    /**
     * @param {string} name
     * @param {string?} plural
     */
    constructor(name: string, plural: string | null = null) {
        super(name, ["bald", "short", "neck"], plural);
    }
}

export class UpperBackHairStyle extends HairStyle {
    /**
     * @param {string} name
     * @param {string?} plural
     */
    constructor(name: any, plural: string | null = null) {
        super(name, ["bald", "short", "neck", "shoulder"], plural);
    }
}

export class LowerBackHairStyle extends HairStyle {
    /**
     * @param {string} name
     * @param {string?} plural
     */
    constructor(name: any, plural: string | null = null) {
        super(
            name,
            ["bald", "short", "neck", "shoulder", "upper back"],
            plural
        );
    }
}

export class ButtHairStyle extends HairStyle {
    /**
     * @param {string} name
     * @param {string?} plural
     */
    constructor(name: any, plural: string | null = null) {
        super(
            name,
            ["bald", "short", "neck", "shoulder", "upper back", "lower back"],
            plural
        );
    }
}

export class ThighHairStyle extends HairStyle {
    /**
     * @param {string} name
     * @param {string?} plural
     */
    constructor(name: any, plural: string | null = null) {
        super(
            name,
            [
                "bald",
                "short",
                "neck",
                "shoulder",
                "upper back",
                "lower back",
                "butt",
            ],
            plural
        );
    }
}

export class ShinHairStyle extends HairStyle {
    /**
     * @param {string} name
     * @param {string?} plural
     */
    constructor(name: any, plural: string | null = null) {
        super(
            name,
            [
                "bald",
                "short",
                "neck",
                "shoulder",
                "upper back",
                "lower back",
                "butt",
                "thigh",
            ],
            plural
        );
    }
}

export class AnkleHairStyle extends HairStyle {
    /**
     * @param {string} name
     * @param {string?} plural
     */
    constructor(name: any, plural: string | null = null) {
        super(
            name,
            [
                "bald",
                "short",
                "neck",
                "shoulder",
                "upper back",
                "lower back",
                "butt",
                "thigh",
                "shin",
            ],
            plural
        );
    }
}
