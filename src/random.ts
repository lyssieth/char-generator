import { nativeMath, sample, integer } from "random-js";

/**
 * @param {Array.<T>} input A list containing input data
 * @param {number} amount
 * @returns {Array.<T> | T} An array of length **amount** with no repeats
 *
 * @template T
 */
export function choice<T>(input: Array<T>, amount = 1): Array<T> | T {
    let ret = sample(nativeMath, input, amount);

    if (ret.length == 1) return ret[0];

    return ret;
}

/**
 * @param {Array.<T>} input
 * @param {(item: T) => boolean} filter
 * @param {number} amount
 * @returns {Array.<T> | T}
 *
 * @template T
 */
export function choice_filter<T>(
    input: Array<T>,
    filter: (item: T) => boolean,
    amount = 1
): Array<T> | T {
    let output = [];

    while (output.length < amount) {
        let ch = <T>choice(input, 1); // Calling 'choice' with an amount of 1 guarantees it is T and not T[]
        if (filter(ch)) output.push(ch);
    }

    if (output.length == 1) return output[0];
    return output;
}

/**
 * @param {number} min
 * @param {number} max
 */
export function random(min: number, max: number) {
    return integer(min, max)(nativeMath);
}
