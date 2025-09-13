import { encodingForModel } from "js-tiktoken";
// Read text from file
import * as fs from 'fs';

// Select encoding for specific model, e.g. GPT-4 Turbo
const enc = encodingForModel("gpt-4-turbo-preview");



const text = fs.readFileSync('sample.txt', 'utf8');


// Encode text into tokens
const tokens = enc.encode(text);
console.log("Tokens:", tokens); // Example output: [9906, 4435, 0]


//Convert tokens back to text
const decodedText = enc.decode(tokens);
console.log("Decoded text:", decodedText);


//Count tokens
console.log("Token count:", tokens.length);
