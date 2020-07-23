import { choice } from "../random.js";

export class Stats {
	constructor() {
		this.strength = new Stat("strength");
		this.dexterity = new Stat("dexterity");
		this.constitution = new Stat("constitution");
		this.intelligence = new Stat("intelligence");
		this.wisdom = new Stat("wisdom");
		this.charisma = new Stat("charisma");

		this.raceModifiers = new Modifiers();
	}
}

export class Preferences {
	/**
	 * @param {boolean?} str
	 * @param {boolean?} dex
	 * @param {boolean?} con
	 * @param {boolean?} int
	 * @param {boolean?} wis
	 * @param {boolean?} cha
	 */
	constructor(
		str = false,
		dex = false,
		con = false,
		int = false,
		wis = false,
		cha = false
	) {
		this.strength = str;
		this.dexterity = dex;
		this.constitution = con;
		this.intelligence = int;
		this.wisdom = wis;
		this.charisma = cha;
	}

	all() {
		let out = [];

		if (this.strength) out.push("strength");
		if (this.dexterity) out.push("dexterity");
		if (this.constitution) out.push("constitution");
		if (this.intelligence) out.push("intelligence");
		if (this.wisdom) out.push("wisdom");
		if (this.charisma) out.push("charisma");

		return out;
	}

	static str() {
		return new Preferences().str();
	}
	str() {
		this.strength = true;
		return this;
	}
	static dex() {
		return new Preferences().dex();
	}
	dex() {
		this.dexterity = true;
		return this;
	}
	static con() {
		return new Preferences().con();
	}
	con() {
		this.constitution = true;
		return this;
	}
	static int() {
		return new Preferences().int();
	}
	int() {
		this.intelligence = true;
		return this;
	}
	static wis() {
		return new Preferences().wis();
	}
	wis() {
		this.wisdom = true;
		return this;
	}
	static cha() {
		return new Preferences().cha();
	}
	cha() {
		this.charisma = true;
		return this;
	}
}

export class Modifiers {
	/**
	 * @param {number?} str
	 * @param {number?} dex
	 * @param {number?} con
	 * @param {number?} int
	 * @param {number?} wis
	 * @param {number?} cha
	 */
	constructor(str = 0, dex = 0, con = 0, int = 0, wis = 0, cha = 0) {
		this.strength = new Modifier("strength", str);
		this.dexterity = new Modifier("dexterity", dex);
		this.constitution = new Modifier("constitution", con);
		this.intelligence = new Modifier("intelligence", int);
		this.wisdom = new Modifier("wisdom", wis);
		this.charisma = new Modifier("charisma", cha);
	}

	/**
	 * @param {number} str
	 */
	static str(str) {
		return new Modifiers().str(str);
	}

	/**
	 * @param {number} str
	 */
	str(str) {
		this.strength.amount = str;
		return this;
	}

	/**
	 * @param {number} dex
	 */
	static dex(dex) {
		return new Modifiers().dex(dex);
	}

	/**
	 * @param {number} dex
	 */
	dex(dex) {
		this.dexterity.amount = dex;
		return this;
	}

	/**
	 * @param {number} con
	 */
	static con(con) {
		return new Modifiers().con(con);
	}

	/**
	 * @param {number} con
	 */
	con(con) {
		this.constitution.amount = con;
		return this;
	}

	/**
	 * @param {number} int
	 */
	static int(int) {
		return new Modifiers().int(int);
	}

	/**
	 * @param {number} int
	 */
	int(int) {
		this.intelligence.amount = int;
		return this;
	}

	/**
	 * @param {number} wis
	 */
	static wis(wis) {
		return new Modifiers().wis(wis);
	}

	/**
	 * @param {number} wis
	 */
	wis(wis) {
		this.wisdom.amount = wis;
		return this;
	}

	/**
	 * @param {number} cha
	 */
	static cha(cha) {
		return new Modifiers().cha(cha);
	}

	/**
	 * @param {number} cha
	 */
	cha(cha) {
		this.charisma.amount = cha;
		return this;
	}

	/**
	 * @param {number} amt
	 * @param {number} add
	 */
	random(amt, add) {
		let include = [];

		if (this.strength.amount === 0) include.push("strength");
		if (this.dexterity.amount === 0) include.push("dexterity");
		if (this.constitution.amount === 0) include.push("constitution");
		if (this.intelligence.amount === 0) include.push("intelligence");
		if (this.wisdom.amount === 0) include.push("wisdom");
		if (this.charisma.amount === 0) include.push("charisma");

		if (include.length === 0) return this;

		let it = choice(include, amt);

		it.forEach((i) => {
			switch (i) {
				case "strength":
					this.strength.amount = add;
					break;
				case "dexterity":
					this.dexterity.amount = add;
					break;
				case "constitution":
					this.constitution.amount = add;
					break;
				case "intelligence":
					this.intelligence.amount = add;
					break;
				case "wisdom":
					this.wisdom.amount = add;
					break;
				case "charisma":
					this.charisma.amount = add;
					break;
			}
		});

		return this;
	}

	/**
	 * @param {number} amt
	 */
	static all(amt) {
		return new Modifiers(amt, amt, amt, amt, amt, amt);
	}
}

export class Stat {
	/**
	 * @param {string} name
	 */
	constructor(name) {
		this.name = name;
		this._value = 10;
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
	/**
	 * @param {string} to
	 * @param {number} amount
	 */
	constructor(to, amount) {
		this.to = to;
		this.amount = amount;
	}
}
