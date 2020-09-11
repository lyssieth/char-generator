import { HairStyle, HairAccessory } from "./hair";
import { COLORS } from "../lists";
import { Color } from "./color";
import { Stats, Modifiers, Preferences } from "./stat";
import { choice } from "../random";
import { Class } from "./class";
import { Race } from "./race";

export class Hair {
    length: string;
    style: HairStyle;
    accessory: HairAccessory;
    primaryColor: Color;
    secondaryColor: Color | null;
    tertiaryColor: Color | null;

    /**
     * @param {string} length
     * @param {HairStyle} style
     * @param {HairAccessory} accessory
     * @param {Color} primaryColor
     * @param {Color?} secondaryColor
     * @param {Color?} tertiaryColor
     */
    constructor(
        length: string,
        style: HairStyle,
        accessory: HairAccessory,
        primaryColor: Color,
        secondaryColor: Color | null = null,
        tertiaryColor: Color | null = null
    ) {
        this.length = length;
        this.style = style;
        this.accessory = accessory;
        this.primaryColor = primaryColor;
        this.secondaryColor = secondaryColor;
        this.tertiaryColor = tertiaryColor;
    }
}

export class Eyes {
    eyesight: string;
    pupilShape: string;
    irisColor: Color;
    scleraColor: Color;

    /**
     * @param {string} eyesight
     * @param {string} pupilShape
     * @param {Color} irisColor
     * @param {Color} scleraColor
     */
    constructor(
        eyesight: string,
        pupilShape: string,
        irisColor: Color,
        scleraColor: Color
    ) {
        this.eyesight = eyesight;
        this.pupilShape = pupilShape;
        this.irisColor = irisColor;
        this.scleraColor = scleraColor;
    }
}

export class Favorites {
    color: Color;
    animal: string;

    /**
     * @param {Color} color
     * @param {string} animal
     */
    constructor(color: Color, animal: string) {
        this.color = color;
        this.animal = animal;
    }
}

export class Fear {
    level: string;
    of: string;

    /**
     *
     * @param {string} level
     * @param {string} of
     */
    constructor(level: any, of: any) {
        this.level = level;
        this.of = of;
    }
}

export class Character {
    private _name: string;
    private _alignment: string;
    private _likelihoodOfMurder: string;
    private _class: Class;
    private _race: Race;
    private _stats: Stats;
    private _physicalGender: string;
    private _appearance: string;
    private _height: string;
    private _voice: string;
    private _skinTone: string;
    private _hair: Hair;
    private _eyes: Eyes;
    private _favorites: Favorites;
    private _hobbies: string[];
    private _fears: Fear[];
    private _rolled: boolean;

    /**
     * @param {string} name
     */
    constructor(name: any) {
        this._name = name;
        this._alignment = "";
        this._likelihoodOfMurder = "";
        this._class = new Class("", new Preferences());
        this._race = new Race("", "", new Modifiers());
        this._stats = new Stats();
        this._physicalGender = "";
        this._appearance = "";
        this._height = "";
        this._voice = "";
        this._skinTone = "";
        this._hair = new Hair(
            "",
            new HairStyle("", []),
            new HairAccessory("", ""),
            COLORS.Black
        );
        this._eyes = new Eyes("", "", COLORS.Black, COLORS.Black);
        this._favorites = new Favorites(COLORS.Black, "");
        /** @type {string[]} */
        this._hobbies = [];
        /** @type {Fear[]} */
        this._fears = [];

        this._rolled = false;
    }

    /**
     * @param {() => number[]} method
     */
    rollStats(method: () => number[]) {
        if (this._rolled) return;
        this._rolled = true;
        this.stats.raceModifiers = this.race.modifiers;
        let pref = this.class.preferences.all();
        let remaining = [
            "strength",
            "dexterity",
            "intelligence",
            "constitution",
            "wisdom",
            "charisma",
        ];

        let rolls = method();

        rolls = rolls.sort((a: number, b: number) => a - b).reverse();

        rolls.forEach((val: number, _) => {
            if (pref.length > 0) {
                let it = choice(pref)[0];
                switch (it) {
                    case "strength":
                        this.stats.strength.value = val;
                        pref = pref.filter((v: string) => v !== "strength");
                        remaining = remaining.filter((v) => v !== "strength");
                        break;
                    case "dexterity":
                        this.stats.dexterity.value = val;
                        pref = pref.filter((v: string) => v !== "dexterity");
                        remaining = remaining.filter((v) => v !== "dexterity");
                        break;
                    case "constitution":
                        this.stats.constitution.value = val;
                        pref = pref.filter((v: string) => v !== "constitution");
                        remaining = remaining.filter(
                            (v) => v !== "constitution"
                        );
                        break;
                    case "intelligence":
                        this.stats.intelligence.value = val;
                        pref = pref.filter((v: string) => v !== "intelligence");
                        remaining = remaining.filter(
                            (v) => v !== "intelligence"
                        );
                        break;
                    case "wisdom":
                        this.stats.wisdom.value = val;
                        pref = pref.filter((v: string) => v !== "wisdom");
                        remaining = remaining.filter((v) => v !== "wisdom");
                        break;
                    case "charisma":
                        this.stats.charisma.value = val;
                        pref = pref.filter((v: string) => v !== "charisma");
                        remaining = remaining.filter((v) => v !== "charisma");
                        break;
                    default:
                        console.log(`Failed to set ${it} to ${val}`);
                        break;
                }
            } else {
                let it = choice(remaining)[0];
                switch (it) {
                    case "strength":
                        this.stats.strength.value = val;
                        remaining = remaining.filter((v) => v !== "strength");
                        break;
                    case "dexterity":
                        this.stats.dexterity.value = val;
                        remaining = remaining.filter((v) => v !== "dexterity");
                        break;
                    case "constitution":
                        this.stats.constitution.value = val;
                        remaining = remaining.filter(
                            (v) => v !== "constitution"
                        );
                        break;
                    case "intelligence":
                        this.stats.intelligence.value = val;
                        remaining = remaining.filter(
                            (v) => v !== "intelligence"
                        );
                        break;
                    case "wisdom":
                        this.stats.wisdom.value = val;
                        remaining = remaining.filter((v) => v !== "wisdom");
                        break;
                    case "charisma":
                        this.stats.charisma.value = val;
                        remaining = remaining.filter((v) => v !== "charisma");
                        break;
                    default:
                        console.log(`Failed to set ${it} to ${val}`);
                        break;
                }
            }
        });
    }

    /**
     * @returns {string}
     */
    get alignment(): string {
        return this._alignment;
    }
    set alignment(alignment) {
        this._alignment = alignment;
    }

    /**
     * @returns {string}
     */
    get likelihoodOfMurder(): string {
        return this._likelihoodOfMurder;
    }
    set likelihoodOfMurder(likelihoodOfMurder) {
        this._likelihoodOfMurder = likelihoodOfMurder;
    }

    /**
     * @returns {Class}
     */
    get class(): Class {
        return this._class;
    }
    set class(c) {
        this._class = c;
    }

    /**
     * @returns {Race}
     */
    get race(): Race {
        return this._race;
    }
    set race(race) {
        this._race = race;
    }

    /**
     * @returns {Stats}
     */
    get stats(): Stats {
        return this._stats;
    }
    set stats(stats) {
        this._stats = stats;
    }

    /**
     * @returns {string}
     */
    get name(): string {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }

    /**
     * @returns {string}
     */
    get physicalGender(): string {
        return this._physicalGender;
    }
    set physicalGender(physicalGender) {
        this._physicalGender = physicalGender;
    }

    /**
     * @returns {string}
     */
    get appearance(): string {
        return this._appearance;
    }
    set appearance(appearance) {
        this._appearance = appearance;
    }

    /**
     * @returns {string}
     */
    get height(): string {
        return this._height;
    }
    set height(height) {
        this._height = height;
    }

    /**
     * @returns {string}
     */
    get voice(): string {
        return this._voice;
    }
    set voice(voice) {
        this._voice = voice;
    }

    /**
     * @returns {string}
     */
    get skinTone(): string {
        return this._skinTone;
    }
    set skinTone(skinTone) {
        this._skinTone = skinTone;
    }

    /**
     * @returns {Hair}
     */
    get hair(): Hair {
        return this._hair;
    }
    set hair(hair) {
        this._hair = hair;
    }

    /**
     * @returns {Eyes}
     */
    get eyes(): Eyes {
        return this._eyes;
    }
    set eyes(eyes) {
        this._eyes = eyes;
    }

    /**
     * @returns {Favorites}
     */
    get favorites(): Favorites {
        return this._favorites;
    }
    set favorites(favorites) {
        this._favorites = favorites;
    }

    /**
     * @returns {string[]}
     */
    get hobbies(): string[] {
        return this._hobbies;
    }
    set hobbies(hobbies) {
        this._hobbies = hobbies;
    }
    add_hobby(hobby: any) {
        this._hobbies.push(hobby);
    }

    /**
     * @returns {Fear[]}
     */
    get fears(): Fear[] {
        return this._fears;
    }
    set fears(fears) {
        this._fears = fears;
    }
    /**
     * @param {Fear} fear
     */
    add_fear(fear: any) {
        this._fears.push(fear);
    }
}
