import { it, expect } from 'vitest';
import { transformToNumber } from './numbers';

it('should transform a valid numeric value into a number', () => {
    // Arrange
    const value = '13';

    // Act
    const result = transformToNumber(value);

    // Assert
    const expectedResult = +value;
    expect(result).toBeTypeOf('number');
    expect(result).toBe(expectedResult);
});

it('should throw an error if no value is passed into the function', () => {
    // Arrange & Act
    const resultFn = () => {
        transformToNumber();
    };

    // Assert
    expect(resultFn).toThrow(/No value was passed./);
});

it('should throw an error if a non numeric value is passed into the function', () => {
    // Arrange 
    const value = 'A';

    //  Act
    const resultFn = () => {
        transformToNumber(value);
    };

    // Assert
    expect(resultFn).toThrow(/Only numeric value is accepted./);
});

// it('should yield NaN for non-transformable values', () => {
//     const input = 'invalid';
//     const input2 = {};

//     const result = transformToNumber(input);
//     const result2 = transformToNumber(input2);

//     expect(result).toBeNaN();
//     expect(result2).toBeNaN();
// });