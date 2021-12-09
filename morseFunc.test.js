import { lettersToMorseCodeConverter } from "./morseFunc.js";
import { MorseCodeToLettersConverter } from "./morseFunc.js";

describe("converting letters to morseCode", () => {
    it("should convert the letters to morse code", () => {
        expect(lettersToMorseCodeConverter("hello")).toStrictEqual(
            ".... . .-.. .-.. ---"
        );
    });
    it("should convert the letters to morse code", () => {
        expect(MorseCodeToLettersConverter(".-- --- .-. -..")).toStrictEqual(
            "word"
        );
    });
    it("should convert the letters to morse code", () => {
        expect(
            MorseCodeToLettersConverter(".... . .-.. .-.. ---")
        ).toStrictEqual("hello");
    });
});
