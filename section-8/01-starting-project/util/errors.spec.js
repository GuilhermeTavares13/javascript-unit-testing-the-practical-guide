import { it, expect, describe, beforeEach } from 'vitest'
import { HttpError, ValidationError } from './errors';

describe('class HttpError', () => {

    it('should hold the values passed by the constructor', () => {
        // Arrange
        let statusCode = '999';
        let message = 'Testing';
        let data = {'testing':'object'};

        // Act
        let httpError = new HttpError(statusCode,message,data);

        // Assert
        expect(httpError.statusCode).toBe(statusCode);
        expect(httpError.message).toBe(message);
        expect(httpError.data).toBe(data);
    });

    it('should contain undefined as data if no data is provided', () => {
        // Arrange
        let statusCode = '999';
        let message = 'Testing';

        // Act
        let httpError = new HttpError(statusCode,message);

        // Assert
        expect(httpError.statusCode).toBe(statusCode);
        expect(httpError.message).toBe(message);
        expect(httpError.data).toBeUndefined();
    });
});


describe('class ValidationError', () => {
    it('should hold the value passed by the constructor', () => {
        // Arrange
        let message = 'Message';

        // Act
        let validationError = new ValidationError(message); 

        // Assert
        expect(validationError.message).toBe(message);
    });
});