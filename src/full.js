import { choice, random, choice_filter } from "./random.js";
import { Character, Hair, Eyes, Favorites, Fear } from "./types/character.js";
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
} from "./lists.js";
import { HairStyle } from "./types/hair.js";

export function full() {
	let char = new Character("");

	char.alignment = choice(ALIGNMENT)[0];
	char.likelihoodOfMurder = choice(LIKELIHOOD_OF_MURDER)[0];
	char.class = choice(CLASS)[0];
	char.race = choice(RACE)[0];
	char.physicalGender = choice(PHYSICAL_GENDER)[0];
	char.appearance = choice(APPEARANCE)[0];
	char.height = choice(HEIGHT)[0];
	char.voice = choice(VOICE)[0];
	char.skinTone = choice(SKIN_TONE)[0];

	let hair_length = choice(HAIR_LENGTH)[0];
	let hair_style = choice_filter(HAIR_STYLE, (t) => {
		if (t instanceof HairStyle) {
			return t.exclude.some((x) => x != hair_length);
		}
		return false;
	})[0];
	let hair_accessory = choice(HAIR_ACCESSORY)[0];

	let colors = choice(COLOR_OBJECTS, random(1, 3));

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
		choice(EYESIGHT)[0],
		choice(PUPIL_SHAPE)[0],
		choice(COLOR_OBJECTS)[0],
		choice(COLOR_OBJECTS)[0]
	);
	char.favorites = new Favorites(
		choice(COLOR_OBJECTS)[0],
		choice(FAVORITE_ANIMAL)[0]
	);

	char.hobbies = choice(HOBBIES, random(0, 4));

	let fears = [];

	for (let i = 0; i < random(0, 2); i++) {
		let fear = choice(FEARS)[0];
		let fear_level = choice(FEAR_LEVEL)[0];

		fears.push(new Fear(fear_level, fear));
	}
	char.fears = fears;

	return char;
}
