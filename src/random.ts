import rjs from "random-js";

const { nativeMath, sample, integer } = rjs;

/**
 * @param {Array.<T>} input A list containing input data
 * @returns {Array.<T>} An array of length **amount** with no repeats
 *
 * @template T
 */
export function choice<T>(input: Array<T>, amount = 1): Array<T> {
    return sample(nativeMath, input, amount);
}

/**
 * @param {any[]} input
 * @param {(arg0: any) => boolean} filter
 */
export function choice_filter(
    input: any[],
    filter: (arg0: any) => boolean,
    amount = 1
) {
    let output = [];

    while (output.length < amount) {
        let ch = choice(input)[0];
        if (filter(ch)) {
            output.push(ch);
        }
    }

    return output;
}

/**
 * @param {number} min
 * @param {number} max
 */
export function random(min: number, max: number) {
    return integer(min, max)(nativeMath);
}
