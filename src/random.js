import rjs from "random-js";

const { nativeMath, sample, integer } = rjs;

/**
 * @param {Array.<T>} input A list containing input data
 * @returns {Array.<T>} An array of length **amount** with no repeats
 *
 * @template T
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
			console.log({ ch });
			output.push(ch);
		}
	}

	return output;
}

/**
 * @param {number} min
 * @param {number} max
 */
export function random(min, max) {
	return integer(min, max)(nativeMath);
}
