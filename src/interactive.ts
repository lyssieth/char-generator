import { Character } from "./types/character";
import { ALIGNMENT } from "./lists";

const STATE = {
    name: 1,
    alignment: 2,
    likelihoodOfMurder: 3,
    class: 4,
    race: 5,
    physicalGender: 6,
    appearance: 7,
    height: 8,
    voice: 9,
    skinTone: 10,
    hairLength: 11,
    hairStyle: 12,
    hairAccessory: 13,
    hairColors: 14,
    eyesight: 15,
    pupilShape: 16,
    irisColor: 17,
    scleraColor: 18,
    favoriteColor: 19,
    favoriteAnimal: 20,
    hobbies: 21,
    fears: 22,
};

export function interactive() {
    let char = new Character("");
    // let state = STATE.name;

    // prompt.start();

    // while (state != 0) {
    //     switch (state) {
    //         case STATE.name:
    //             char.name = state_name();
    //             state++;
    //             break;
    //         case STATE.alignment:
    //             char.alignment = state_alignment();
    //             state++;
    //             break;
    //     }
    // }

    return char;
}
