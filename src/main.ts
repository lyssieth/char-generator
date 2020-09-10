import commander from "commander";
const { Command } = commander;
import { argv } from "process";
import { interactive } from "./interactive.js";
import { full } from "./full.js";
import { describe, describe_dbg } from "./describe.js";
import { Character } from "./types/character.js";

/*
 * Based on this compilation of lists by /u/wizard_cheese, with hopefully some formatting.
 * https://www.reddit.com/r/d100/comments/hvwkpu/want_to_leave_your_character_up_to_fate/ (see also OP.md)
 *
 * Requires randomness to work, of course. Basically, luck, I guess.
 * Might be interesting, though, I dunno.
 */

const program = new Command();
program.name("char-generator");
program.version("0.0.1");

program.option("--interactive", "A fully interactive run", false);
program.option(
    "--dbg",
    "Describes as debug print, not as proper describe",
    true
);

program.parse(argv);

let char: Character;

if (program.interactive) {
    char = interactive();
} else {
    char = full();
}

describe(char, program.dbg);
