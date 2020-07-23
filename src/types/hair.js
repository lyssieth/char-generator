export class HairAccessory {
	/**
	 * @param {string} name
	 * @param {string} plural
	 */
	constructor(name, plural) {
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
	/**
	 * @param {string} name
	 * @param {string[]} exclude
	 * @param {string?} plural
	 */
	constructor(name, exclude, plural = null) {
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
	constructor(name, plural = null) {
		super(name, ["bald"], plural);
	}
}

export class NeckHairStyle extends HairStyle {
	/**
	 * @param {string} name
	 * @param {string?} plural
	 */
	constructor(name, plural = null) {
		super(name, ["bald", "short"], plural);
	}
}

export class ShoulderHairStyle extends HairStyle {
	/**
	 * @param {string} name
	 * @param {string?} plural
	 */
	constructor(name, plural = null) {
		super(name, ["bald", "short", "neck"], plural);
	}
}

export class UpperBackHairStyle extends HairStyle {
	/**
	 * @param {string} name
	 * @param {string?} plural
	 */
	constructor(name, plural = null) {
		super(name, ["bald", "short", "neck", "shoulder"], plural);
	}
}

export class LowerBackHairStyle extends HairStyle {
	/**
	 * @param {string} name
	 * @param {string?} plural
	 */
	constructor(name, plural = null) {
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
	constructor(name, plural = null) {
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
	constructor(name, plural = null) {
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
	constructor(name, plural = null) {
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
	constructor(name, plural = null) {
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
