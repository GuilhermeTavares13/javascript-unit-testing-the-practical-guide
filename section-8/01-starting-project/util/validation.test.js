import { it, expect } from 'vitest'
import { validateNotEmpty } from './validation'


it('should not yield an error if a valid string is provided', () => {
    // Arrange
    const validString = 'Hello World';

    // Act
    const result = () => {
       validateNotEmpty(validString); 
    }

    // Assert
    expect(result).not.toThrow();
});

it('should throw an error if an empty string is provided', () => {
    // Arrange
    const invalidString = '';

    // Act
    const result = () => {
        validateNotEmpty(invalidString);
    }

    // Assert
    expect(result).toThrow();
});

it('should throw an error if an string filled with blanks is provided', () => {
    // Arrange
    const invalidString = '   ';

    // Act
    const result = () => {
        validateNotEmpty(invalidString);
    }

    // Assert
    expect(result).toThrow();
});

it('should throw an error with the message if an empty string and a message is provided', () => {
    // Arrange
    const invalidString = '';
    const errorMessage = 'Invalid String'

    // Act
    const result = () => {
        validateNotEmpty(invalidString,errorMessage);
    }

    // Assert
    expect(result).toThrow(errorMessage);
});