import { HairStyle, HairAccessory } from "./hair.js";
import { COLORS } from "../lists.js";
import { Color } from "./color.js";

export class Hair {
	/**
	 * @param {string} length
	 * @param {HairStyle} style
	 * @param {HairAccessory} accessory
	 * @param {Color} primary_color
	 * @param {Color?} secondary_color
	 * @param {Color?} tertiary_color
	 */
	constructor(
		length,
		style,
		accessory,
		primary_color,
		secondary_color = null,
		tertiary_color = null
	) {
		this.length = length;
		this.style = style;
		this.accessory = accessory;
		this.primary_color = primary_color;
		this.secondary_color = secondary_color || primary_color;
		this.tertiary_color = tertiary_color || primary_color;
	}
}

export class Eyes {
	/**
	 * @param {string} eyesight
	 * @param {string} pupil_shape
	 * @param {Color} iris_color
	 * @param {Color} sclera_color
	 */
	constructor(eyesight, pupil_shape, iris_color, sclera_color) {
		this.eyesight = eyesight;
		this.pupil_shape = pupil_shape;
		this.iris_color = iris_color;
		this.sclera_color = sclera_color;
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
		this._likelihood_of_murder = "";
		this._physical_gender = "";
		this._appearance = "";
		this._height = "";
		this._voice = "";
		this._skin_tone = "";
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
	get likelihood_of_murder() {
		return this._likelihood_of_murder;
	}
	set likelihood_of_murder(likelihood_of_murder) {
		this._likelihood_of_murder = likelihood_of_murder;
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
	get physical_gender() {
		return this._physical_gender;
	}
	set physical_gender(physical_gender) {
		this._physical_gender = physical_gender;
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
	get skin_tone() {
		return this._skin_tone;
	}
	set skin_tone(skin_tone) {
		this._skin_tone = skin_tone;
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
