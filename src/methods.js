import { random } from "./random.js";

export function dice_4d6kh3() {
	function single() {
		let rolls = [random(1, 6), random(1, 6), random(1, 6), random(1, 6)]
			.sort((a, b) => a - b)
			.reverse();

		rolls.pop();

		return rolls.reduce((pv, cv) => pv + cv, 0);
	}

	return call_six(single);
}

function call_six(func) {
	return [func(), func(), func(), func(), func(), func()];
}
