import { HairStyle, HairAccessory } from "./hair.js";
import { COLORS } from "../lists.js";
import { Color } from "./color.js";
import { Stats, Modifiers, Preferences } from "./stat.js";
import { choice } from "../random.js";
import { Class } from "./class.js";
import { Race } from "./race.js";

export class Hair {
	/**
	 * @param {string} length
	 * @param {HairStyle} style
	 * @param {HairAccessory} accessory
	 * @param {Color} primaryColor
	 * @param {Color?} secondaryColor
	 * @param {Color?} tertiaryColor
	 */
	constructor(
		length,
		style,
		accessory,
		primaryColor,
		secondaryColor = null,
		tertiaryColor = null
	) {
		this.length = length;
		this.style = style;
		this.accessory = accessory;
		this.primaryColor = primaryColor;
		this.secondaryColor = secondaryColor || primaryColor;
		this.tertiaryColor = tertiaryColor || primaryColor;
	}
}

export class Eyes {
	/**
	 * @param {string} eyesight
	 * @param {string} pupilShape
	 * @param {Color} irisColor
	 * @param {Color} scleraColor
	 */
	constructor(eyesight, pupilShape, irisColor, scleraColor) {
		this.eyesight = eyesight;
		this.pupilShape = pupilShape;
		this.irisColor = irisColor;
		this.scleraColor = scleraColor;
	}
}

export class Favorites {
	/**
	 *
	 * @param {Color} color
	 * @param {string} animal
	 */
	constructor(color, animal) {
		this.color = color;
		this.animal = animal;
	}
}

export class Fear {
	/**
	 *
	 * @param {string} level
	 * @param {string} of
	 */
	constructor(level, of) {
		this.level = level;
		this.of = of;
	}
}

export class Character {
	/**
	 * @param {string} name
	 */
	constructor(name) {
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
	}

	/**
	 * @param {() => number[]} method
	 */
	rollStats(method) {
		this.stats.raceModifiers = this.race.modifiers;
		let pref = this.class.preferences.all();

		let rolls = method();

		rolls = rolls.sort((a, b) => a - b).reverse();

		rolls.forEach((val, index) => {
			if (pref.length > 0) {
				let it = choice(pref)[0];
				switch (it) {
					case "strength":
						this.stats.strength.value = val;
						pref = pref.filter((v) => v !== "strength");
						break;
					case "dexterity":
						this.stats.dexterity.value = val;
						pref = pref.filter((v) => v !== "dexterity");
						break;
					case "constitution":
						this.stats.constitution.value = val;
						pref = pref.filter((v) => v !== "constitution");
						break;
					case "intelligence":
						this.stats.intelligence.value = val;
						pref = pref.filter((v) => v !== "intelligence");
						break;
					case "wisdom":
						this.stats.wisdom.value = val;
						pref = pref.filter((v) => v !== "wisdom");
						break;
					case "charisma":
						this.stats.charisma.value = val;
						pref = pref.filter((v) => v !== "charisma");
						break;
				}
			} else {
				switch (index) {
					case 0:
						this.stats.strength.value = val;
						break;
					case 1:
						this.stats.dexterity.value = val;
						break;
					case 2:
						this.stats.constitution.value = val;
						break;
					case 3:
						this.stats.intelligence.value = val;
						break;
					case 4:
						this.stats.wisdom.value = val;
						break;
					case 5:
						this.stats.charisma.value = val;
						break;
				}
			}
		});
	}

	/**
	 * @returns {string}
	 */
	get alignment() {
		return this._alignment;
	}
	set alignment(alignment) {
		this._alignment = alignment;
	}

	/**
	 * @returns {string}
	 */
	get likelihoodOfMurder() {
		return this._likelihoodOfMurder;
	}
	set likelihoodOfMurder(likelihoodOfMurder) {
		this._likelihoodOfMurder = likelihoodOfMurder;
	}

	/**
	 * @returns {Class}
	 */
	get class() {
		return this._class;
	}
	set class(c) {
		this._class = c;
	}

	/**
	 * @returns {Race}
	 */
	get race() {
		return this._race;
	}
	set race(race) {
		this._race = race;
	}

	/**
	 * @returns {Stats}
	 */
	get stats() {
		return this._stats;
	}
	set stats(stats) {
		this._stats = stats;
	}

	/**
	 * @returns {string}
	 */
	get name() {
		return this._name;
	}
	set name(name) {
		this._name = name;
	}

	/**
	 * @returns {string}
	 */
	get physicalGender() {
		return this._physicalGender;
	}
	set physicalGender(physicalGender) {
		this._physicalGender = physicalGender;
	}

	/**
	 * @returns {string}
	 */
	get appearance() {
		return this._appearance;
	}
	set appearance(appearance) {
		this._appearance = appearance;
	}

	/**
	 * @returns {string}
	 */
	get height() {
		return this._height;
	}
	set height(height) {
		this._height = height;
	}

	/**
	 * @returns {string}
	 */
	get voice() {
		return this._voice;
	}
	set voice(voice) {
		this._voice = voice;
	}

	/**
	 * @returns {string}
	 */
	get skinTone() {
		return this._skinTone;
	}
	set skinTone(skinTone) {
		this._skinTone = skinTone;
	}

	/**
	 * @returns {Hair}
	 */
	get hair() {
		return this._hair;
	}
	set hair(hair) {
		this._hair = hair;
	}

	/**
	 * @returns {Eyes}
	 */
	get eyes() {
		return this._eyes;
	}
	set eyes(eyes) {
		this._eyes = eyes;
	}

	/**
	 * @returns {Favorites}
	 */
	get favorites() {
		return this._favorites;
	}
	set favorites(favorites) {
		this._favorites = favorites;
	}

	/**
	 * @returns {string[]}
	 */
	get hobbies() {
		return this._hobbies;
	}
	set hobbies(hobbies) {
		this._hobbies = hobbies;
	}
	add_hobby(hobby) {
		this._hobbies.push(hobby);
	}

	/**
	 * @returns {Fear[]}
	 */
	get fears() {
		return this._fears;
	}
	set fears(fears) {
		this._fears = fears;
	}
	/**
	 * @param {Fear} fear
	 */
	add_fear(fear) {
		this._fears.push(fear);
	}
}
