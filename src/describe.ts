import { dice_4d6kh3 } from "./methods";
import { Character } from "./types/character";

/**
 * @param {Character} char
 * @param {boolean} dbg
 */
export function describe(char: Character, dbg: boolean = false) {
    if (char.name.length < 1) char.name = "<namehere>";
    char.rollStats(dice_4d6kh3);

    if (dbg) {
        describe_dbg(char);
    } else {
        switch (char.appearance) {
            case "masculine":
                describe_masculine(char);
                break;
            case "feminine":
                describe_feminine(char);
                break;
            case "androgynous":
                describe_androgynous(char);
                break;
            default:
                describe_dbg(char);
                break;
        }
    }

    console.log(
        "This is just a breakpoint holder, remove before final release."
    ); //TODO: Remove before release ya dumb fucker
}

/**
 * @param {Character} char
 */
function describe_masculine(char: Character) {}

/**
 * @param {Character} char
 */
function describe_feminine(char: Character) {}

/**
 * @param {Character} char
 */
function describe_androgynous(char: Character) {}

/**
 * @param {Character} char
 */
export function describe_dbg(char: Character) {
    console.log({
        name: char.name,
        race: {
            name: char.race.name,
            description: char.race.description,
        },
        alignment: char.alignment,
        likelihood_of_murder: char.likelihoodOfMurder,
        physical_gender: char.physicalGender,
        appearance: char.appearance,
        height: char.height,
        voice: char.voice,
        skin_tone: char.skinTone,
        hair: {
            length: char.hair.length,
            style: char.hair.style.plural || char.hair.style.name,
            accessory: char.hair.accessory,
            primary_color: char.hair.primaryColor,
            secondary_color: char.hair.secondaryColor,
            tertiary_color: char.hair.tertiaryColor,
        },
        eyes: {
            eyesight: char.eyes.eyesight,
            pupil_shape: char.eyes.pupilShape,
            iris_color: char.eyes.irisColor,
            sclera_color: char.eyes.scleraColor,
        },
        favorites: {
            color: char.favorites.color,
            animal: char.favorites.animal,
        },
        hobbies: char.hobbies,
        fears: char.fears,
        class: char.class,
        stats: {
            strength: char.stats.strength,
            dexterity: char.stats.dexterity,
            constitution: char.stats.constitution,
            intelligence: char.stats.intelligence,
            wisdom: char.stats.wisdom,
            charisma: char.stats.charisma,
            race_modifiers: {
                strength: char.stats.raceModifiers.strength.amount,
                dexterity: char.stats.raceModifiers.dexterity.amount,
                constitution: char.stats.raceModifiers.constitution.amount,
                intelligence: char.stats.raceModifiers.intelligence.amount,
                wisdom: char.stats.raceModifiers.wisdom.amount,
                charisma: char.stats.raceModifiers.charisma.amount,
            },
        },
    });
}
