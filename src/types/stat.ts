import { choice } from "../random.js";

export class Stats {
    private _strength: Stat;
    private _dexterity: Stat;
    private _constitution: Stat;
    private _intelligence: Stat;
    private _wisdom: Stat;
    private _charisma: Stat;

    private _raceModifiers: Modifiers;

    constructor() {
        this._strength = new Stat("strength");
        this._dexterity = new Stat("dexterity");
        this._constitution = new Stat("constitution");
        this._intelligence = new Stat("intelligence");
        this._wisdom = new Stat("wisdom");
        this._charisma = new Stat("charisma");

        this._raceModifiers = new Modifiers();
    }

    get strength() {
        return this._strength;
    }

    get dexterity() {
        return this._dexterity;
    }

    get constitution() {
        return this._constitution;
    }

    get intelligence() {
        return this._intelligence;
    }

    get wisdom() {
        return this._wisdom;
    }

    get charisma() {
        return this._charisma;
    }

    get raceModifiers() {
        return this._raceModifiers;
    }
    set raceModifiers(value: Modifiers) {
        this._raceModifiers = value;
    }
}

export class Preferences {
    private _strength: boolean;
    private _dexterity: boolean;
    private _constitution: boolean;
    private _intelligence: boolean;
    private _wisdom: boolean;
    private _charisma: boolean;

    /**
     * @param {boolean} str
     * @param {boolean} dex
     * @param {boolean} con
     * @param {boolean} int
     * @param {boolean} wis
     * @param {boolean} cha
     */
    constructor(
        str: boolean = false,
        dex: boolean = false,
        con: boolean = false,
        int: boolean = false,
        wis: boolean = false,
        cha: boolean = false
    ) {
        this._strength = str;
        this._dexterity = dex;
        this._constitution = con;
        this._intelligence = int;
        this._wisdom = wis;
        this._charisma = cha;
    }

    all() {
        let out = [];

        if (this._strength) out.push("strength");
        if (this._dexterity) out.push("dexterity");
        if (this._constitution) out.push("constitution");
        if (this._intelligence) out.push("intelligence");
        if (this._wisdom) out.push("wisdom");
        if (this._charisma) out.push("charisma");

        return out;
    }

    static str() {
        return new Preferences().str();
    }
    str() {
        this._strength = true;
        return this;
    }
    get strength() {
        return this._strength;
    }

    static dex() {
        return new Preferences().dex();
    }
    dex() {
        this._dexterity = true;
        return this;
    }
    get dexterity() {
        return this._dexterity;
    }

    static con() {
        return new Preferences().con();
    }
    con() {
        this._constitution = true;
        return this;
    }
    get constitution() {
        return this._constitution;
    }

    static int() {
        return new Preferences().int();
    }
    int() {
        this._intelligence = true;
        return this;
    }
    get intelligence() {
        return this._intelligence;
    }

    static wis() {
        return new Preferences().wis();
    }
    wis() {
        this._wisdom = true;
        return this;
    }
    get wisdom() {
        return this._wisdom;
    }

    static cha() {
        return new Preferences().cha();
    }
    cha() {
        this._charisma = true;
        return this;
    }
    get charisma() {
        return this._charisma;
    }
}

export class Modifiers {
    private _strength: Modifier;
    private _dexterity: Modifier;
    private _constitution: Modifier;
    private _intelligence: Modifier;
    private _wisdom: Modifier;
    private _charisma: Modifier;

    /**
     * @param {number} str
     * @param {number} dex
     * @param {number} con
     * @param {number} int
     * @param {number} wis
     * @param {number} cha
     */
    constructor(
        str: number = 0,
        dex: number = 0,
        con: number = 0,
        int: number = 0,
        wis: number = 0,
        cha: number = 0
    ) {
        this._strength = new Modifier("strength", str);
        this._dexterity = new Modifier("dexterity", dex);
        this._constitution = new Modifier("constitution", con);
        this._intelligence = new Modifier("intelligence", int);
        this._wisdom = new Modifier("wisdom", wis);
        this._charisma = new Modifier("charisma", cha);
    }

    /**
     * @param {number} str
     */
    static str(str: number) {
        return new Modifiers().str(str);
    }
    /**
     * @param {number} str
     */
    str(str: number) {
        this._strength.amount = str;
        return this;
    }

    get strength() {
        return this._strength;
    }

    /**
     * @param {number} dex
     */
    static dex(dex: number) {
        return new Modifiers().dex(dex);
    }

    /**
     * @param {number} dex
     */
    dex(dex: number) {
        this._dexterity.amount = dex;
        return this;
    }

    get dexterity() {
        return this._dexterity;
    }

    /**
     * @param {number} con
     */
    static con(con: number) {
        return new Modifiers().con(con);
    }

    /**
     * @param {number} con
     */
    con(con: number) {
        this._constitution.amount = con;
        return this;
    }

    get constitution() {
        return this._constitution;
    }

    /**
     * @param {number} int
     */
    static int(int: number) {
        return new Modifiers().int(int);
    }

    /**
     * @param {number} int
     */
    int(int: number) {
        this._intelligence.amount = int;
        return this;
    }

    get intelligence() {
        return this._intelligence;
    }

    /**
     * @param {number} wis
     */
    static wis(wis: number) {
        return new Modifiers().wis(wis);
    }

    /**
     * @param {number} wis
     */
    wis(wis: number) {
        this._wisdom.amount = wis;
        return this;
    }

    get wisdom() {
        return this._wisdom;
    }

    /**
     * @param {number} cha
     */
    static cha(cha: number) {
        return new Modifiers().cha(cha);
    }

    /**
     * @param {number} cha
     */
    cha(cha: number) {
        this._charisma.amount = cha;
        return this;
    }

    get charisma() {
        return this._charisma;
    }

    /**
     * @param {number} amt
     * @param {number} add
     */
    random(amt: number, add: number) {
        let include = [];

        if (this._strength.amount === 0) include.push("strength");
        if (this._dexterity.amount === 0) include.push("dexterity");
        if (this._constitution.amount === 0) include.push("constitution");
        if (this._intelligence.amount === 0) include.push("intelligence");
        if (this._wisdom.amount === 0) include.push("wisdom");
        if (this._charisma.amount === 0) include.push("charisma");

        if (include.length === 0) return this;

        let it = choice(include, amt);

        it.forEach((i) => {
            switch (i) {
                case "strength":
                    this._strength.amount = add;
                    break;
                case "dexterity":
                    this._dexterity.amount = add;
                    break;
                case "constitution":
                    this._constitution.amount = add;
                    break;
                case "intelligence":
                    this._intelligence.amount = add;
                    break;
                case "wisdom":
                    this._wisdom.amount = add;
                    break;
                case "charisma":
                    this._charisma.amount = add;
                    break;
            }
        });

        return this;
    }

    /**
     * @param {number} amt
     */
    static all(amt: number) {
        return new Modifiers(amt, amt, amt, amt, amt, amt);
    }
}

export class Stat {
    private _name: string;
    private _value: number;

    /**
     * @param {string} name
     */
    constructor(name: string) {
        this._name = name;
        this._value = 10;
    }

    get name() {
        return this._name;
    }

    get value() {
        return this._value;
    }
    set value(v) {
        if (v >= 1 && v <= 20) {
            this._value = v;
        }
    }
}

export class Modifier {
    private _to: string;
    private _amount: number;

    /**
     * @param {string} to
     * @param {number} amount
     */
    constructor(to: string, amount: number) {
        this._to = to;
        this._amount = amount;
    }

    get to() {
        return this._to;
    }

    get amount() {
        return this._amount;
    }
    set amount(value: number) {
        this._amount = value;
    }
}
