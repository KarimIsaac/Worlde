import { test, expect } from "@jest/globals";
import feedback from "../src/app.js";

describe('feedback', () => {
  
  
  test('returns correct result for "APPLE" and "BANANA"', () => {
    const guess = 'APPLE';
    const word = 'BANANA';
    const expectedResult = [
      { letter: 'A', result: 'misplaced' },
      { letter: 'P', result: 'incorrect' },
      { letter: 'P', result: 'incorrect' },
      { letter: 'L', result: 'incorrect' },
      { letter: 'E', result: 'incorrect' },
    ];
    expect(feedback(guess, word)).toEqual(expectedResult);

  });
  test('returns correct result for "VODOO" and "BANANA" all incorrect', () => {
    const guess = 'VODOO';
    const word = 'BANANA';
    const expectedResult = [
      { letter: 'V', result: 'incorrect' },
      { letter: 'O', result: 'incorrect' },
      { letter: 'D', result: 'incorrect' },
      { letter: 'O', result: 'incorrect' },
      { letter: 'O', result: 'incorrect' },
    ];
    expect(feedback(guess, word)).toEqual(expectedResult);
  });

  test('returns correct result for "AB" and "BA" all misplaced', () => {
    const guess = 'AB';
    const word = 'BA';
    const expectedResult = [
      { letter: 'A', result: 'misplaced' },
      { letter: 'B', result: 'misplaced' },
     
    ];
    expect(feedback(guess, word)).toEqual(expectedResult);

  });


  test('returns correct result for "AD" and "AD" all correct', () => {
    const guess = 'AD';
    const word = 'AD';
    const expectedResult = [
      { letter: 'A', result: 'correct' },
      { letter: 'D', result: 'correct' },
     
     
    ];
    expect(feedback(guess, word)).toEqual(expectedResult);
  });
});