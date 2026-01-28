import { it, expect, describe } from 'vitest';

import { generateResultText, outputResult } from './output';

describe('generateResultText()', () => {
    it('should format result text', () => {

        // Arrange
        const number = 9;

        // Act
        const result = generateResultText(number);

        // Assert
        expect(result).toBe('Result: ' + number);
    });

    it('should throw an error if no value is passed', () => {

        // Arrange
        const number = undefined;

        // Act
        const resultFn = () => {
            generateResultText(number);
        }

        // Assert
        expect(resultFn).toThrow(/Must have a valid value to generate a result text./);
    });
});


// describe('outputResult', () => {
//     it('')
// });
