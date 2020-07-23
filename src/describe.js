import { Character } from "./types/character.js";

/**
 * @param {Character} char
 */
export function describe(char) {
	console.log({
		name: char.name,
		alignment: char.alignment,
		likelihood_of_murder: char.likelihood_of_murder,
		class: char.class,
		physical_gender: char.physical_gender,
		appearance: char.appearance,
		height: char.height,
		voice: char.voice,
		skin_tone: char.skin_tone,
		hair: {
			length: char.hair.length,
			style: char.hair.style.plural || char.hair.style.name,
			accessory: char.hair.accessory,
			primary_color: char.hair.primary_color,
			secondary_color: char.hair.secondary_color,
			tertiary_color: char.hair.tertiary_color,
		},
		eyes: {
			eyesight: char.eyes.eyesight,
			pupil_shape: char.eyes.pupil_shape,
			iris_color: char.eyes.iris_color,
			sclera_color: char.eyes.sclera_color,
		},
		favorites: {
			color: char.favorites.color,
			animal: char.favorites.animal,
		},
		hobbies: char.hobbies,
		fears: char.fears,
	});
}
