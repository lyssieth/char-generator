import { Modifiers } from "./stat.js";

export class Race {
	/**
	 * @param {string} name
	 * @param {string} description
	 * @param {Modifiers} modifiers
	 */
	constructor(name, description, modifiers) {
		this.name = name;
		this.description = description;
		this.modifiers = modifiers;
	}
}
