import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "../functions.js";

describe("Capitalize Tests", () => {
    test("empty string", () => {
        expect(capitalize("")).toBe("");
    });

    test("single uppercase character", () => {
        expect(capitalize("A")).toBe("A");
    });

    test("single lowercase character", () => {
        expect(capitalize("a")).toBe("A");
    });

    test("two letter word", () => {
        expect(capitalize("an")).toBe("An");
    });

    test("number input", () => {
        expect(() => capitalize(1)).toThrow(TypeError);
    });

    test("null input", () => {
        expect(() => capitalize(null)).toThrow(TypeError);
    });

    test("undefined input", () => {
        expect(() => capitalize(undefined)).toThrow(TypeError);
    });
});

describe("String Reverse Tests", () => {
    test("empty string", () => {
        expect(reverseString("")).toBe("");
    });

    test("single character", () => {
        expect(reverseString("a")).toBe("a");
    });

    test("two letter word", () => {
        expect(reverseString("an")).toBe("na");
    });

    test("five letter  word", () => {
        expect(reverseString("apple")).toBe("elppa");
    });

    test("number input", () => {
        expect(() => reverseString(1)).toThrow(TypeError);
    });

    test("null input", () => {
        expect(() => reverseString(null)).toThrow(TypeError);
    });

    test("undefined input", () => {
        expect(() => reverseString(undefined)).toThrow(TypeError);
    });
});

describe("Calculator Tests", () => {
    describe("Calculator Integer Input", () => {
        test("adds two integers", () => {
            expect(calculator.add(2, 2)).toBe(4);
        });
        test("subtracts two integers", () => {
            expect(calculator.subtract(2, 2)).toBe(0);
        });
        test("divides two integers", () => {
            expect(calculator.divide(2, 2)).toBe(1);
        });
        test("multiplies two integers", () => {
            expect(calculator.multiply(2, 2)).toBe(4);
        });
    });

    describe("Calculator Float Input", () => {
        test("adds two floats", () => {
            expect(calculator.add(2.2, 2.2)).toBeCloseTo(4.4);
        });
        test("subtracts two floats", () => {
            expect(calculator.subtract(2.2, 2.1)).toBeCloseTo(0.1);
        });
        test("divides two floats", () => {
            expect(calculator.divide(2.5, 0.5)).toBeCloseTo(5);
        });
        test("multiplies two floats", () => {
            expect(calculator.multiply(2.5, 0.5)).toBeCloseTo(1.25);
        });
    });

    describe("Calculator Error Handling", () => {
        test("cannot divide by 0", () => {
            expect(() => calculator.divide(1, 0).toThrow(Error));
        });
        describe.each([
            ["add", calculator.add],
            ["subtract", calculator.subtract],
            ["multiply", calculator.multiply],
            ["divide", calculator.divide],
        ])("%s", (name, func) => {
            test("throws on non-number first argument", () => {
                expect(() => func("invalid", 2)).toThrow(TypeError);
            });

            test("throws on non-number second argument", () => {
                expect(() => func(2, "invalid")).toThrow(TypeError);
            });

            test("throws on null arguments", () => {
                expect(() => func(null, 2)).toThrow(TypeError);
                expect(() => func(2, null)).toThrow(TypeError);
            });
        });
    });
});

describe("Caesar Cipher Tests", () => {
    describe("Caesar Cipher Valid Input", () => {
        test("empty string", () => {
            expect(caesarCipher("", 3)).toBe("");
        });
        test("single lowercase character", () => {
            expect(caesarCipher("a", 3)).toBe("d");
        });
        test("single uppercase character", () => {
            expect(caesarCipher("A", 3)).toBe("D");
        });
        test("large shift factor", () => {
            expect(caesarCipher("A", 29)).toBe("D");
        });
        test("negative shift factor", () => {
            expect(caesarCipher("D", -3)).toBe("A");
        });
        test("negative wrapping", () => {
            expect(caesarCipher("A", -3)).toBe("X");
        });
        test("punctuation preserved", () => {
            expect(caesarCipher("., ", 3)).toBe("., ");
        });
        test("Hello, World!", () => {
            expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
        });
    });

    describe("Caesar Cipher Error Handling", () => {
        test("non-string 1st argument", () => {
            expect(() => caesarCipher(1, 3).toThrow(TypeError));
        });
        test("non-integer 2nd argument", () => {
            expect(() => caesarCipher("xyz", 1.2).toThrow(TypeError));
            expect(() => caesarCipher("xyz", "3").toThrow(TypeError));
        });
        test("missing arguments", () => {
            expect(() => caesarCipher("xyz").toThrow(TypeError));
            expect(() => caesarCipher(null, "xyz").toThrow(TypeError));
        });
    });
});

describe("Array Analyzer Tests", () => {
    test("empty array", () => {
        expect(analyzeArray([])).toEqual({
            average: null,
            min: null,
            max: null,
            length: 0,
        });
    });

    test("single element array", () => {
        expect(analyzeArray([1])).toEqual({
            average: 1,
            min: 1,
            max: 1,
            length: 1,
        });
    });

    test("[1, 8, 3, 4, 2, 6]", () => {
        expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6,
        });
    });

    test("throws on non-array input", () => {
        expect(() => analyzeArray("")).toThrow(TypeError);
    });
});
