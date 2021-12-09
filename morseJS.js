// import { lettersToMorseCodeConverter } from "./morseFunc.js";

// console.log(lettersToMorseCodeConverter("hi"));

const lettersToMorseCodeConverter = (str) => {
    const lettersToMorseCode = {
        A: ".-",
        B: "-...",
        C: "-.-.",
        D: "-..",
        E: ".",
        F: "..-.",
        G: "--.",
        H: "....",
        I: "..",
        J: ".---",
        K: "-.-",
        L: ".-..",
        M: "--",
        N: "-.",
        O: "---",
        P: ".--.",
        Q: "--.-",
        R: ".-.",
        S: "...",
        T: "-",
        U: "..-",
        V: "...-",
        W: ".--",
        X: "-..-",
        Y: "-.--",
        Z: "--..",
        " ": "/",
        1: ".----",
        2: "..---",
        3: "...--",
        4: "....-",
        5: ".....",
        6: "-....",
        7: "--...",
        8: "---..",
        9: "----.",
        0: "-----",
    };

    return str
        .toUpperCase()
        .split("")
        .map((el) => {
            return lettersToMorseCode[el];
        })
        .join(" ");
};

function morseCodeConverter() {
    input = document.getElementById("english").value;
    mCode = lettersToMorseCodeConverter(input);
    document.getElementById("morseCode").value = mCode;
    return mCode;
}

// let button = document.querySelector("btn");

// button.addEventListener("click", () => {
//     input = document.getElementById("english").value;
//     mCode = lettersToMorseCodeConverter(input);
//     document.getElementById("morseCode").value = mcode;
//     return mcode;
// .split("")
//             .map((a) => a.spilt(" ").map((el) => {
//                 return lettersToMorseCode[el];
//             })
//             .join(" ")
// };
// });

const MorseCodeToLettersConverter = (morsec) => {
    const MorseCodeToLetters = {
        ".-": "a",
        "-...": "b",
        "-.-.": "c",
        "-..": "d",
        ".": "e",
        "..-.": "f",
        "--.": "g",
        "....": "h",
        "..": "i",
        ".---": "j",
        "-.-": "k",
        ".-..": "l",
        "--": "m",
        "-.": "n",
        "---": "o",
        ".--.": "p",
        "--.-": "q",
        ".-.": "r",
        "...": "s",
        "-": "t",
        "..-": "u",
        "...-": "v",
        ".--": "w",
        "-..-": "x",
        "-.--": "y",
        "--..": "z",
        ".----": "1",
        "..---": "2",
        "...--": "3",
        "....-": "4",
        ".....": "5",
        "-....": "6",
        "--...": "7",
        "---..": "8",
        "----.": "9",
        "-----": "0",
        "/": " ",
    };
    return morsec
        .split("   ")
        .map((a) =>
            a
                .split(" ")
                .map((b) => MorseCodeToLetters[b])
                .join("")
        )
        .join(" ");
};

// console.log(MorseCodeToLettersConverter(".-- --- .-. -.."));
// export default MorseCodeToLetters;

function EnglishConverter() {
    minput = document.getElementById("morseCodee").value;
    text = MorseCodeToLettersConverter(minput);
    document.getElementById("englishh").value = text;
    return text;
}
