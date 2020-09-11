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
    let state = STATE.name;

    // prompt.start();

    while (state != 0) {
        switch (state) {
            case STATE.name:
                char.name = state_name();
                state++;
                break;
            case STATE.alignment:
                char.alignment = state_alignment();
                state++;
                break;
        }
    }

    return char;
}

function state_name() {
    const schema = {
        properties: {
            name: {
                pattern: /^[\w\s'\-]+$/,
                message:
                    "Name must only be letters, spaces, apostrophes or dashes.",
                required: true,
            },
        },
    };

    let name: string;

    // prompt.get(
    //     schema,
    //     /**
    //      * @param {any} _err
    //      * @param {{ name: string; }} result
    //      */
    //     function (_err: any, result: { name: string }) {
    //         name = result.name;
    //     }
    // );

    return name;
}

function state_alignment() {
    const schema = {
        properties: {
            alignment: {
                required: true,
            },
        },
    };

    let alignment: string;

    // while (true) {
    //     let tempAlignment: string;

    //     prompt.get(schema, (result: { alignment: string }) => {
    //         tempAlignment = result.alignment;
    //     });

    //     if (ALIGNMENT.some((v) => tempAlignment.toLowerCase() === v)) {
    //         alignment = tempAlignment;
    //         break;
    //     } else {
    //         console.log(`Invalid alignment: ${tempAlignment}`);
    //     }
    // }

    return alignment;
}
