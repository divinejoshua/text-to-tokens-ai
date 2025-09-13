import { encodingForModel } from "js-tiktoken";

// Select encoding for specific model, e.g. GPT-4 Turbo
const enc = encodingForModel("gpt-4-turbo-preview");

// Encode text into tokens
const tokens = enc.encode("Hello World!");
console.log(tokens); // Example output: [9906, 4435, 0]
