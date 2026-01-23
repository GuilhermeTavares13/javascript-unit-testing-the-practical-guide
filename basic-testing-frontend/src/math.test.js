import { it, expect } from 'vitest';
import { add } from './math';

it('should summarize all number values in an array', () => {

    // Arrange
    const numbers = [1, 2, 3];
    
    // Act - execute the function
    const result = add(numbers);
    
    // Assert
    const expectedResult = numbers.reduce((prevValue, curValue) => prevValue + curValue, 0);
    expect(result).toBe(expectedResult);
});

it('should yield NaN if at least one invalid number is provided', () => {

    // Arrange 
    const numbers = [1, 2, 'a', -1, '1'];

    // Act - execute the function
    const result = add(numbers);

    // Assert
    expect(result).toBeNaN();
});

it('should yield a correct sum if an array of numeric string values is provided', () => {
    // Arrange
    const numbers = ['1', '2', '3'];

    // Act
    const result = add(numbers);

    // Assert 
    const expectedResult = numbers.reduce((prevValue, curValue) => +prevValue + +curValue, 0);
    expect(result).toBe(expectedResult);
});

it('should yield 0 if an empty array is provided', () => {
    // Arrange
    const numbers = [];

    // Act
    const result = add(numbers);

    // Assert
    expect(result).toBe(0);
});

it('should yield 0 if an array of spaces is provided', () => {
    // Arrange
    const numbers = [' ', ' ', ' '];

    // Act
    const result = add(numbers);

    // Assert
    expect(result).toBe(0);
});

it('should yield the provided value if only one value is provided', () => {
    // Arrange
    const numbers = [1];

    // Act
    const result = add(numbers);

    // Assert
    const expectedResult = numbers[0];
    expect(result).toBe(expectedResult);
});

it('should yield the provided value if only one value is provided and the others spaces', () => {
    // Arrange
    const numbers = [1, ' ', ' ', ' '];

    // Act
    const result = add(numbers);

    // Assert
    const expectedResult = numbers.reduce((prevValue, curValue) => +prevValue + +curValue, 0);
    expect(result).toBe(expectedResult);
});

it('should throw an error if no value is passed into the function',() => {
    
    const resultFn = () => {
        add();
    };

    expect(resultFn).toThrow(/is not iterable/);  
});

it('should throw an error if provided with multiple arguments instead of an array', () => {
    // Arrange
    const num1 = 1;
    const num2 = 2;

    const resultFn = () => {
        add(num1, num2);
    }

    // Assert
    expect(resultFn).toThrow(/is not iterable/);
});

