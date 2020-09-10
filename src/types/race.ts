import { Modifiers } from "./stat";

export class Race {
    private _name: string;
    private _description: string;
    private _modifiers: Modifiers;

    /**
     * @param {string} name
     * @param {string} description
     * @param {Modifiers} modifiers
     */
    constructor(name: string, description: string, modifiers: Modifiers) {
        this._name = name;
        this._description = description;
        this._modifiers = modifiers;
    }

    get name() {
        return this._name;
    }

    get description() {
        return this._description;
    }

    get modifiers() {
        return this._modifiers;
    }
}
