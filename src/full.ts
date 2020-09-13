import { choice, random, choice_filter } from "./random";
import { Character, Hair, Eyes, Favorites, Fear } from "./types/character";
import {
    PHYSICAL_GENDER,
    APPEARANCE,
    HEIGHT,
    VOICE,
    SKIN_TONE,
    HAIR_LENGTH,
    HAIR_STYLE,
    HAIR_ACCESSORY,
    COLOR_OBJECTS,
    EYESIGHT,
    PUPIL_SHAPE,
    FAVORITE_ANIMAL,
    HOBBIES,
    FEARS,
    FEAR_LEVEL,
    ALIGNMENT,
    LIKELIHOOD_OF_MURDER,
    CLASS,
    RACE,
} from "./lists";
import { HairAccessory, HairStyle } from "./types/hair";
import { Class } from "./types/class";
import { Race } from "./types/race";
import { Color } from "./types/color";

/**
 * @param {string?} name Name
 */
export function full(name: string | null) {
    let char = new Character(name || "FAKE NAME HERE");

    char.alignment = <string>choice(ALIGNMENT);
    char.likelihoodOfMurder = <string>choice(LIKELIHOOD_OF_MURDER);
    char.class = <Class>choice(CLASS);
    char.race = <Race>choice(RACE);
    char.physicalGender = <string>choice(PHYSICAL_GENDER);
    char.appearance = <string>choice(APPEARANCE);
    char.height = <string>choice(HEIGHT);
    char.voice = <string>choice(VOICE);
    char.skinTone = <string>choice(SKIN_TONE);

    let hair_length = <string>choice(HAIR_LENGTH);
    let hair_style = <HairStyle>choice_filter(HAIR_STYLE, (t) => {
        if (t instanceof HairStyle) {
            return t.exclude.every((x) => x != hair_length);
        }
        return false;
    });
    let hair_accessory = <HairAccessory>choice(HAIR_ACCESSORY);

    let colors = choice(COLOR_OBJECTS, random(1, 3));

    if (colors instanceof Color) colors = [colors];

    switch (colors.length) {
        case 1:
            char.hair = new Hair(
                hair_length,
                hair_style,
                hair_accessory,
                colors[0]
            );
            break;
        case 2:
            char.hair = new Hair(
                hair_length,
                hair_style,
                hair_accessory,
                colors[0],
                colors[1]
            );
            break;
        case 3:
            char.hair = new Hair(
                hair_length,
                hair_style,
                hair_accessory,
                colors[0],
                colors[1],
                colors[2]
            );
            break;
    }

    char.eyes = new Eyes(
        <string>choice(EYESIGHT),
        <string>choice(PUPIL_SHAPE),
        <Color>choice(COLOR_OBJECTS),
        <Color>choice(COLOR_OBJECTS)
    );
    char.favorites = new Favorites(
        <Color>choice(COLOR_OBJECTS),
        <string>choice(FAVORITE_ANIMAL)
    );

    let hobbies = choice(HOBBIES, random(0, 4));

    if (typeof hobbies == "string") {
        char.hobbies = [hobbies];
    } else {
        char.hobbies = hobbies;
    }

    let fears = [];

    for (let i = 0; i < random(0, 3); i++) {
        let fear = <string>choice(FEARS);
        let fear_level = <string>choice(FEAR_LEVEL);

        fears.push(new Fear(fear_level, fear));
    }
    char.fears = fears;

    return char;
}
