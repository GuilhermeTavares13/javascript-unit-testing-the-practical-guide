import {it, expect} from 'vitest';
import { validateStringNotEmpty, validateNumber } from './validation';


// validateStringNotEmpty
it('should not throw an error if a valid string is provided', () => {
    // Arrange & Act
    const resultFn = () => {
        validateStringNotEmpty('Valid String');
    };

    // Assert
    expect(resultFn).not.toThrow();
});

it('should throw an error if an empty string is provided', () => {
    // Arrange & Act
    const resultFn = () => {
        validateStringNotEmpty('');
    };

    // Assert
    expect(resultFn).toThrow(/Invalid input - must not be empty./);
});

it('should throw an error if a value that is not a string is provided', () => {
    // Arrange & Act
    const resultFn = () => {
        validateStringNotEmpty(3);
    };

    // Assert
    expect(resultFn).toThrow(/value.trim is not a function/);
});


// validateNumber
it('should not throw an error if a valid number is provided', () => {
    // Arrange & Act
    const resultFn = () => {
        validateNumber('13');
    };

    // Assert
    expect(resultFn).not.toThrow();
});

it('should throw an error if an invalid number is provided', () => {
    // Arrange & Act
    const resultFn = () => {
        validateNumber('A');
    };
});