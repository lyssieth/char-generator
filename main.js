import commander from "commander";
const { Command } = commander;
import { argv } from "process";
import { interactive } from "./src/interactive.js";
import { full } from "./src/full.js";
import { describe } from "./src/describe.js";

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

program.parse(argv);

let char;

if (program.interactive) {
	char = interactive();
} else {
	char = full();
}

describe(char);
