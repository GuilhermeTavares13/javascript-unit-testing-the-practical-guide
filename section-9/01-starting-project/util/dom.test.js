import fs from 'fs';
import path from 'path';
import { vi, it, expect, beforeEach} from 'vitest';
import { showError } from './dom'; 
import { Window } from 'happy-dom';

const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

let window = new Window();
let document = window.document;
document.write(htmlDocumentContent);
vi.stubGlobal('document',document);

beforeEach(() => {
    document.body.innerHTML = '';
    document.write(htmlDocumentContent);
})


it('should add an error paragraph to the id="errors" element', () => {
    showError('test');

    const errorsEl = document.getElementById('errors');
    const errorParagraph = errorsEl.firstElementChild;

    expect(errorParagraph).not.toBeNull();
});

it('should not contain an error paragraph initially', () => {
    const errorsEl = document.getElementById('errors');
    const errorParagraph = errorsEl.firstElementChild;
    expect(errorParagraph).toBeNull();
});

it('should output the provided message in the error paragraph', () => {
    const testErrorMessage = 'Test';

    showError(testErrorMessage);

    const errorsEl = document.getElementById('errors');
    const errorParagraph = errorsEl.firstElementChild;

    expect(errorParagraph.textContent).toBe(testErrorMessage);
});