export function capitalize(string) {
    if (typeof string !== "string") {
        throw new TypeError("capitalize expects a string");
    }

    if (string === "") {
        return "";
    }

    return string[0].toUpperCase() + string.slice(1);
}

export function reverseString(string) {
    if (typeof string !== "string") {
        throw new TypeError("capitalize expects a string");
    }

    let reversed = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
    }

    return reversed;
}

export const calculator = {
    add: (num1, num2) => {
        if (!num1 || !num2 || typeof num1 !== "number" || typeof num2 !== "number") {
            throw new TypeError("add expects 2 numbers");
        }
        return num1 + num2;
    },
    subtract: (num1, num2) => {
        if (!num1 || !num2 || typeof num1 !== "number" || typeof num2 !== "number") {
            throw new TypeError("subtract expects 2 numbers");
        }
        return num1 - num2;
    },
    divide: (num1, num2) => {
        if (!num1 || !num2 || typeof num1 !== "number" || typeof num2 !== "number") {
            throw new TypeError("divide expects 2 numbers");
        }

        if (num2 === 0) {
            throw new Error("cannot divide by zero");
        }
        return num1 / num2;
    },
    multiply: (num1, num2) => {
        if (!num1 || !num2 || typeof num1 !== "number" || typeof num2 !== "number") {
            throw new TypeError("multiply expects 2 numbers");
        }
        return num1 * num2;
    },
};

export function caesarCipher(string, shiftFactor) {
    if (typeof string !== "string") {
        throw new TypeError("caesarCipher expects a string 1st argument (word to encrypt)");
    }

    if (!Number.isInteger(shiftFactor)) {
        throw new TypeError("caeserCipher expects an integer 2nd argument (shift factor)");
    }

    let shifted = "";

    for (const char of string) {
        shifted += shiftCharacter(char, shiftFactor);
    }

    return shifted;
}

// Helper: Shift a single character
function shiftCharacter(char, shiftFactor) {
    const A_CODE = "A".charCodeAt(0);
    const a_CODE = "a".charCodeAt(0);
    const ALPHABET_SIZE = 26;

    // Normalize shift to 0-25
    shiftFactor = mod(shiftFactor, ALPHABET_SIZE);

    const charCode = char.charCodeAt(0);

    // Uppercase letters
    if (char >= "A" && char <= "Z") {
        return String.fromCharCode(((charCode - A_CODE + shiftFactor) % ALPHABET_SIZE) + A_CODE);
    }

    // Lowercase letters
    if (char >= "a" && char <= "z") {
        return String.fromCharCode(((charCode - a_CODE + shiftFactor) % ALPHABET_SIZE) + a_CODE);
    }

    // Non-alphabetic characters (preserve)
    return char;
}

// Helper: Proper modulo that handles negatives
function mod(n, m) {
    return ((n % m) + m) % m;
}

export function analyzeArray(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError("analyzeArray expects an array");
    }

    if (arr.length === 0) {
        return { average: null, min: null, max: null, length: 0 };
    }

    return {
        average: arr.reduce((a, b) => a + b) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length,
    };
}
