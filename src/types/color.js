export class Color {
	/**
	 * @param {string} name
	 * @param {string} hex
	 */
	constructor(name, hex) {
		this._name = name;
		this._hex = hex;
	}

	get name() {
		return this._name;
	}

	get hex() {
		return this._hex;
	}

	get rgb() {
		let col = this.hex.split(/[0-9a-fA-F]{2}/);
		let r = col[0],
			g = col[1],
			b = col[2];

		return { r: parseInt(r, 16), g: parseInt(g, 16), b: parseInt(b, 16) };
	}
}
