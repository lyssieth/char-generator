import { full } from "./full";
import { describe } from "./describe";
import { Character } from "./types/character";
import { template } from "lodash";

/*
 * Based on this compilation of lists by /u/wizard_cheese, with hopefully some formatting.
 * https://www.reddit.com/r/d100/comments/hvwkpu/want_to_leave_your_character_up_to_fate/ (see also OP.md)
 *
 * Requires randomness to work, of course. Basically, luck, I guess.
 * Might be interesting, though, I dunno.
 */

function generate() {
    const outputElement = getOutputElement();
    const dbg = getDebugElement();
    const name = getNameElement();

    if (name) {
        if (name.value.length < 1) {
            outputElement.innerHTML = template(
                `<h1 style="color:red;">Please insert a name!</h1>`
            )();
            return;
        }
    }

    if (outputElement && dbg && name) {
        let char: Character = full(name.value);

        let html = describe(char, dbg.checked);

        outputElement.innerHTML = html;
    }
}

function getOutputElement() {
    return <HTMLDivElement>document.getElementById("output");
}

function getDebugElement() {
    return <HTMLInputElement>document.getElementById("debug");
}

function getNameElement() {
    return <HTMLInputElement>document.getElementById("name");
}

module.exports = generate;
