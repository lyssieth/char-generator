import { Preferences } from "./stat";

export class Class {
    private _name: string;
    private _preferences: Preferences;

    /**
     * @param {string} name
     * @param {Preferences} preferences
     */
    constructor(name: string, preferences: Preferences) {
        this._name = name;
        this._preferences = preferences;
    }

    get name() {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get preferences() {
        return this._preferences;
    }

    set preferences(value: Preferences) {
        this._preferences = value;
    }
}
