import { describe, it, expect } from 'vitest';

import { transformToNumber, cleanNumbers } from './numbers';

describe('transformToNumer()', () => {
  it('should transform a string number to a number of type number', () => {
    const input = '1';

    const result = transformToNumber(input);

    expect(result).toBeTypeOf('number');
  });

  it('should transform a string number to a number of type number', () => {
    const input = '1';

    const result = transformToNumber(input);

    expect(result).toBe(+input);
  });

  it('should yield NaN for non-transformable values', () => {
    const input = 'invalid';
    const input2 = {};

    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);

    expect(result).toBeNaN();
    expect(result2).toBeNaN();
  });
});

describe('cleaNumbers()', () => {
  it('should return an array of number values if an array of string number values is provided', () => {
    // Arrange
    const numberValues = ['1', '2'];

    // Act
    const result = cleanNumbers(numberValues);

    // Assert
    expect(result[0]).toBeTypeOf('number');
  });

  it('should throw an error if an array with at least one empty string is provided', () => {
    // Arrange
    const numberValues = ['1', '']

    // Act
    const resultFn = () => {
      cleanNumbers(numberValues);
    }

    // Assert
    expect(resultFn).toThrow();
  });
});