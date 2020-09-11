import { template } from "lodash";
import { dice_4d6kh3 } from "./methods";
import { Character } from "./types/character";

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
            case "masculine":
            case "feminine":
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

    text += `<h1><%- name %></h1>\n`;
    text += `<%- name %> is an apparently <%- appearance %> member of the <span class="underlined" title="<%- race.description %>"><%- race.name %></span> race,`;
    text += ` though is physically <%- physicalGender %>.\n`;
    text += `Their alignment is <%- alignment %>, and the likelihood that they'll commit murder is <%- likelihoodOfMurder %>.\n`;
    text += `Their height is <%- height %> for their race, and they have a <%- voice %> voice with <%- skinTone %> skin.\n`;

    if (char.hair.length == "bald" || char.hair.style.name == "bald") {
        text += `They are bald.`;
    } else {
        if (char.hair.style.plural) {
            text += `Their have <%- hair.length %> <%- hair.style.plural %> for hair.`;
        } else {
            text += `Their have <%- hair.length %> <%- hair.style.name %> hair.`;
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
        text += `<%- eyes.pupilShape %> pupils`;
    } else {
        text += `<%- eyes.pupilShape %>-shaped pupils`;
    }
    text += ` and `;
    text += char.eyes.scleraColor.toHTMLString(renderColors);
    text += ` sclera.\n`;

    let compiled = template(text);

    return compiled(char);
}

/**
 * @param {Character} char
 */
export function describe_dbg(char: Character, renderColors: boolean) {
    let compiled = template(`<code>
{
    "name": "<%- name %>",
    "race": {
        "name": "<%- race.name %>",
        "description": "<%- race.description %>"
    }
    "alignment": "<%- alignment %>",
    "likelihood_of_murder": "<%- likelihoodOfMurder %>",
    "physical_gender": "<%- physicalGender %>",
    "appearance": "<%- appearance %>",
    "height": "<%- height %>",
    "voice": "<%- melodic %>",
    "skin_tone": "<%- pale %>",
    "hair": {
        "length": "<%- hair.length %>",
        "style": "<%- hair.style %>",
        "accessory": {
            "name": "<%- hair.accessory.name >",
            "plural": "<%- hair.accessory.plural >"
        },
        "primary_color": "<%= hair.primaryColor.toHTMLString(renderColors); %>",
        "secondary_color": "<%= hair.secondaryColor?.toHTMLString(renderColors); %>",
        "tertiary_color": "<%= hair.tertiaryColor?.toHTMLString(renderColors); %>"
    },
    "eyes": {
        "eyesight": "<%- eyes.eyesight %>"
        "pupil_shape": "<%- eyes.pupilShape %>"
        "iris_color": "<%= eyes.irisColor.toHTMLString(renderColors); %>",
        "sclera_color": "<%= eyes.scleraColor.toHTMLString(renderColors); %>"
    },
    "favorites": {
        "color": "<%= favorites.color.toHTMLString(renderColors); %>",
        "animal": "<%- favorites.animal %>"
    }
    "hobbies": <%= JSON.stringify(hobbies, null, 4) %>
    "fears": <%= JSON.stringify(fears, null, 4) %>
    "class": {
        "name": "<%- class.name %>"
        "preferences": {
            "strength": <%- class.preferences.strength %>
            "dexterity": <%- class.preferences.dexterity %>
            "constitution": <%- class.preferences.constitution %>
            "intelligence": <%- class.preferences.intelligence %>
            "wisdom": <%- class.preferences.wisdom %>
            "charisma": <%- class.preferences.charisma %>
        }
    }
    "stats": {
        "strength": <%- stats.strength.value %>
        "dexterity": <%- stats.dexterity.value %>
        "constitution": <%- stats.constitution.value %>
        "intelligence": <%- stats.intelligence.value %>
        "wisdom": <%- stats.wisdom.value %>
        "charisma": <%- stats.charisma.value %>
        "race_modifiers": <%= JSON.stringify(stats.raceModifiers, null, 4) %>
    }
}</code>`);

    return compiled({ renderColors, ...char });
}
