# Odin Testing Practice

A JavaScript project built as part of **The Odin Project** curriculum to practice **writing unit tests** and **test-driven thinking** using **Jest**.  
The goal of this project is to become comfortable testing small, pure functions and understanding how tests validate program correctness.

---

## 🧩 Project Description

This project involves writing a set of simple JavaScript functions and creating corresponding **unit tests** to verify their behavior.

Rather than focusing on complex application logic, the emphasis is placed on:

- Writing predictable, testable functions
- Covering edge cases
- Understanding how automated tests catch regressions

Each function is tested in isolation to reinforce good testing habits.

---

## 🚀 Features

The project includes tests for functions that:

- Capitalize strings
- Reverse strings
- Perform basic calculator operations
- Apply Caesar cipher transformations
- Analyze arrays and return statistical data

All tests are written using **Jest** and run in a Node.js environment.

---

## 🧠 Key Concepts Practiced

- Writing unit tests with Jest
- Test-driven development (TDD) fundamentals
- Separating logic into small, pure functions
- Testing edge cases and invalid inputs
- Understanding test suites, test cases, and assertions
- Reading and interpreting test failures

---

## 🧪 Example Test

```js
test("capitalizes the first letter of a string", () => {
    expect(capitalize("hello")).toBe("Hello");
});

test("correctly shifts letters using a Caesar cipher", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
});
```

---

## Learning Objectives

This project was built to develop practical experience with:

- Writing unit tests using Jest
- Practicing test-driven and test-first thinking
- Structuring code to be easily testable
- Identifying and testing edge cases
- Using matchers effectively

---

## Key Concepts Practiced

- Red → Green → Refactor workflow
- Input validation and error handling
- Reading and reasoning about failing tests

---

## License

This project is for educational purposes and follows The Odin Project curriculum guidelines.  
Feel free to fork, modify, and explore.
