import { template } from "lodash";
import { dice_4d6kh3 } from "./methods";
import { Character } from "./types/character";

/**
 * @param {Character} char
 * @param {boolean} dbg
 * @returns {string}
 */
export function describe(char: Character, dbg: boolean = false): string {
    if (char.name.length < 1) char.name = "<namehere>";
    char.rollStats(dice_4d6kh3);

    if (dbg) {
        return describe_dbg(char);
    } else {
        switch (char.appearance) {
            case "masculine":
            case "feminine":
            case "androgynous":
                return describe_text(char);
            default:
                return describe_dbg(char);
        }
    }
}

/**
 * @param {Character} char
 * @returns {string}
 */
function describe_text(char: Character): string {
    let compiled = template(`<h1><%- name %></h1>
    <%- name %> is an apparently <%- appearance %> <span class="underlined" title="<%- race.description %>"><%- race.name %></span>, though physically is <%- physicalGender %>.
    `);

    return compiled(char);
}

/**
 * @param {Character} char
 */
export function describe_dbg(char: Character) {
    return (
        `<code>` +
        JSON.stringify(
            {
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
                        constitution:
                            char.stats.raceModifiers.constitution.amount,
                        intelligence:
                            char.stats.raceModifiers.intelligence.amount,
                        wisdom: char.stats.raceModifiers.wisdom.amount,
                        charisma: char.stats.raceModifiers.charisma.amount,
                    },
                },
            },
            null,
            4
        ) +
        `</code>`
    );
}
