import { template } from "lodash";
import { dice_4d6kh3 } from "./methods";
import { Character, Fear } from "./types/character";

/**
 * @param {Character} char
 * @param {boolean} dbg
 * @param {boolean} renderColors
 * @returns {string}
 */
export function describe(
    char: Character,
    dbg: boolean = false,
    renderColors: boolean = false
): string {
    if (char.name.length < 1) char.name = "<namehere>";
    char.rollStats(dice_4d6kh3);

    if (dbg) {
        return describe_dbg(char, renderColors);
    } else {
        switch (char.appearance) {
            case "male":
            case "female":
            case "androgynous":
                return describe_text(char, renderColors);
            default:
                return describe_dbg(char, renderColors);
        }
    }
}

/**
 * @param {Character} char
 * @returns {string}
 */
function describe_text(char: Character, renderColors: boolean): string {
    let text = "";

    text += `<h1><%- char.name %></h1>\n`;
    text += `<%- char.name %> is a <%- char.physicalGender %> member of the <span class="underlined" title="<%- char.race.description %>"><%- char.race.name %></span> race,`;
    if (char.physicalGender === char.appearance)
        text += ` and presents themselves as the same.\n`;
    else text += ` though presents themselves as <%- char.appearance %>.\n`;
    text += `Their alignment is <%- char.alignment %>, and the likelihood that they'll commit murder is <%- char.likelihoodOfMurder %>.\n`;
    text += `Their height is <%- char.height %> for their race, and they have a <%- char.voice %> voice with <%- char.skinTone %> skin.\n`;

    if (char.hair.length == "bald" || char.hair.style.name == "bald") {
        text += `They are bald.`;
    } else {
        if (char.hair.style.plural) {
            text += `Their have <%- char.hair.length %> <%- char.hair.style.plural %> for hair.`;
        } else {
            text += `Their have <%- char.hair.length %> <%- char.hair.style.name %> hair.`;
        }
    }
    text += ` The primary color of their hair is `;
    text += char.hair.primaryColor.toHTMLString(renderColors);
    if (char.hair.secondaryColor) {
        text += ` with a secondary color of `;
        text += char.hair.secondaryColor.toHTMLString(renderColors);
    }
    if (char.hair.tertiaryColor) {
        text += ` and a tertiary color of `;
        text += char.hair.tertiaryColor.toHTMLString(renderColors);
    }
    text += `.\n`;

    text += `Their eyes are `;
    text += char.eyes.irisColor.toHTMLString(renderColors);
    text += ` irises with `;
    if (char.eyes.pupilShape == "shattered") {
        text += `<%- char.eyes.pupilShape %> pupils`;
    } else {
        text += `<%- char.eyes.pupilShape %>-shaped pupils`;
    }
    text += ` and `;
    text += char.eyes.scleraColor.toHTMLString(renderColors);
    text += ` sclera.\n`;

    text += `Their favorite color is `;
    text += char.favorites.color.toHTMLString(renderColors);
    text += ` and their favorite animal is a(n) <%- char.favorites.animal %>.\n`;

    if (char.hobbies.length > 0) {
        if (char.hobbies.length > 1) {
            text += `Their hobbies are: `;
            for (const i in char.hobbies) {
                let hobby = char.hobbies[i];

                text += `- ${hobby}\n`;
            }
        } else {
            text += `Their hobby is ${char.hobbies[0]}.\n`;
        }
    } else {
        text += `They have no hobbies.\n`;
    }

    if (char.fears.length > 0) {
        if (char.fears.length > 1) {
            text += `Their fears are: `;
            for (const i in char.fears) {
                let fear = char.fears[i];

                text += `- a(n) ${fear.level} fear of ${fear.of}\n`;
            }
        } else {
            let fear = char.fears[0];
            text += `Their only fear is a(n) ${fear.level} fear of ${fear.of}.\n`;
        }
    } else {
        text += `They have no fears.\n`;
    }

    text += `They are a <%- char.class.name %>, which has preferences for the following stats: `;

    let pref = char.class.preferences;

    let p = ``;

    if (pref.strength) {
        p += `strength`;
    }
    if (pref.dexterity) {
        if (p.length > 0) p += ` and dexterity`;
        else p += `dexterity`;
    }
    if (pref.constitution) {
        if (p.length > 0) p += ` and constitution`;
        else p += `constitution`;
    }
    if (pref.intelligence) {
        if (p.length > 0) p += ` and intelligence`;
        else p += `intelligence`;
    }
    if (pref.wisdom) {
        if (p.length > 0) p += ` and wisdom`;
        else p += `wisdom`;
    }
    if (pref.charisma) {
        if (p.length > 0) p += ` and charisma`;
        else p += `charisma`;
    }

    text += p + `.\n`;

    text += `Their stats are as follows:\n`;

    text += `- strength: <%- char.stats.strength.value %> (race modifier: <%- char.stats.raceModifiers.strength.amount %>)\n`;
    text += `- dexterity: <%- char.stats.dexterity.value %> (race modifier: <%- char.stats.raceModifiers.dexterity.amount %>)\n`;
    text += `- constitution: <%- char.stats.constitution.value %> (race modifier: <%- char.stats.raceModifiers.constitution.amount %>)\n`;
    text += `- intelligence: <%- char.stats.intelligence.value %> (race modifier: <%- char.stats.raceModifiers.intelligence.amount %>)\n`;
    text += `- wisdom: <%- char.stats.wisdom.value %> (race modifier: <%- char.stats.raceModifiers.wisdom.amount %>)\n`;
    text += `- charisma: <%- char.stats.charisma.value %> (race modifier: <%- char.stats.raceModifiers.charisma.amount %>)\n`;

    let compiled = template(text);

    return compiled({ char });
}

/**
 * @param {Character} char
 */
export function describe_dbg(char: Character, renderColors: boolean) {
    let hairPrimary = char.hair.primaryColor.toHTMLString(renderColors);
    let hairSecondary = char.hair.secondaryColor
        ? char.hair.secondaryColor.toHTMLString(renderColors)
        : null;
    let hairTertiary = char.hair.tertiaryColor
        ? char.hair.tertiaryColor.toHTMLString(renderColors)
        : null;
    let eyesIris = char.eyes.irisColor.toHTMLString(renderColors);
    let eyesSclera = char.eyes.scleraColor.toHTMLString(renderColors);
    let favoriteColor = char.favorites.color.toHTMLString(renderColors);

    let text = `<code>
{
    "name": "${char.name}",
    "race": {
        "name": "${char.race.name}",
        "description": "${char.race.description}"
    },
    "alignment": "<%- alignment %>",
    "likelihood_of_murder": "<%- likelihoodOfMurder %>",
    "physical_gender": "<%- physicalGender %>",
    "appearance": "<%- appearance %>",
    "height": "<%- height %>",
    "voice": "<%- voice %>",
    "skin_tone": "<%- skinTone %>",
    "hair": {
        "length": "<%- hair.length %>",
        "style": {
            "name": "${char.hair.style.name}",
            "plural": "${char.hair.style.plural}"
        },
        "accessory": {
            "name": "<%- hair.accessory.name %>",
            "plural": "<%- hair.accessory.plural %>"
        },
        "primary_color": "${hairPrimary}",
        "secondary_color": "${hairSecondary}",
        "tertiary_color": "${hairTertiary}"
    },
    "eyes": {
        "eyesight": "${char.eyes.eyesight}",
        "pupil_shape": "${char.eyes.pupilShape}",
        "iris_color": "${eyesIris}",
        "sclera_color": "${eyesSclera}"
    },
    "favorites": {
        "color": "${favoriteColor}",
        "animal": "${char.favorites.animal}"
    },
    "hobbies": ${stringifyHobbies(char.hobbies, 8)},
    "fears": ${stringifyFears(char.fears, 8)},
    "class": {
        "name": ${char.class.name}
        "preferences": {
            "strength": ${char.class.preferences.strength},
            "dexterity": ${char.class.preferences.dexterity},
            "constitution": ${char.class.preferences.constitution},
            "intelligence": ${char.class.preferences.intelligence},
            "wisdom": ${char.class.preferences.wisdom},
            "charisma": ${char.class.preferences.charisma},
        }
    }
    "stats": {
        "strength": ${char.stats.strength.value},
        "dexterity": ${char.stats.dexterity.value},
        "constitution": ${char.stats.constitution.value},
        "intelligence": ${char.stats.intelligence.value},
        "wisdom": ${char.stats.wisdom.value},
        "charisma": ${char.stats.charisma.value},
        "race_modifiers": {
            "strength": ${char.stats.raceModifiers.strength.amount},
            "dexterity": ${char.stats.raceModifiers.dexterity.amount},
            "constitution": ${char.stats.raceModifiers.constitution.amount},
            "intelligence": ${char.stats.raceModifiers.intelligence.amount},
            "wisdom": ${char.stats.raceModifiers.wisdom.amount},
            "charisma": ${char.stats.raceModifiers.charisma.amount}
        }
    }
}</code>`;

    try {
        let compiled = template(text);

        return compiled(char);
    } catch (e) {
        console.error(e);

        return template(`<h1>An error occurred, check console!</h1>`)();
    }
}

function stringifyHobbies(hobbies: string[], baseIndent: number) {
    let text = "[\n";

    hobbies.forEach((x) => {
        text += s(baseIndent) + '"' + x + '",\n';
    });

    text =
        text.substring(0, text.length).trim() +
        "\n" +
        s(baseIndent - 4) +
        "]\n";

    if (text.length < 10) text = "[]";

    return text.trim();
}

function stringifyFears(fears: Fear[], baseIndent: number) {
    let text = "[";

    for (const i in fears) {
        let fear = fears[i];
        text += `\n${s(baseIndent)}{\n${s(baseIndent + 4)}"level": "${
            fear.level
        }",\n${s(baseIndent + 4)}"of": "${fear.of}"\n${s(baseIndent)}},`;
    }

    text =
        text.substring(0, text.length - 1) + "\n" + s(baseIndent - 4) + "]\n";

    if (text.length < 10) text = "[]";

    return text.trim();
}

function s(amount: number) {
    return c(" ", amount);
}

function c(char: string, amount: number) {
    let text = "";
    for (let i = 0; i < amount; i++) text += char;

    return text;
}
