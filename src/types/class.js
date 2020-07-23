import { Preferences } from "./stat.js";

export class Class {
	/**
	 * @param {string} name
	 * @param {Preferences} preferences
	 */
	constructor(name, preferences) {
		this.name = name;
		this.preferences = preferences;
	}
}
