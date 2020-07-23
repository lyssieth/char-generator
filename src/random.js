import rjs from "random-js";

const { nativeMath, sample, integer } = rjs;

/**
 * @param {any[]} input A list containing input data
 * @returns {any[]} An array of length **amount** with no repeats
 */
export function choice(input, amount = 1) {
	return sample(nativeMath, input, amount);
}

/**
 * @param {any[]} input
 * @param {(arg0: any) => boolean} filter
 */
export function choice_filter(input, filter, amount = 1) {
	let output = [];

	while (output.length < amount) {
		let ch = choice(input)[0];
		if (filter(ch)) {
			output.push(ch);
		}
	}

	return output;
}

export const random = integer;
