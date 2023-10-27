"use strict"

// Initialize variables for final text and characters
let final_text = "";
let char;
let next_char;
let prev_char;

// Function to transform the text based on the given option
function transform(text, option) {
    // Initialize the final text
    let final_text = "";
    // Switch case to handle different transformation options
    switch (option) {
        case "A-Z":
            // Transform all characters to uppercase
            return text.toUpperCase();
        case "a-z":
            // Transform all characters to lowercase
            return text.toLowerCase();
        case "A_":
            // Transform the first character of each word to uppercase
            for (let i = 0; i < text.length; i++) {
                char = text.charAt(i);
                prev_char = text.charAt(i - 1);
                if (prev_char == ' ' || prev_char == '') {
                    final_text += char.toUpperCase();
                }
                else {
                    final_text += char
                }
            }
            return final_text;
        case "_Z":
            // Transform the last character of each word to uppercase
            for (let i = 0; i < text.length; i++) {
                char = text.charAt(i);
                next_char = text.charAt(i + 1);
                if (next_char == ' ' || next_char == '') {
                    final_text += char.toUpperCase();
                }
                else {
                    final_text += char
                }
            }
            return final_text;
        case "a_":
            // Transform the first character of each word to lowercase
            for (let i = 0; i < text.length; i++) {
                char = text.charAt(i);
                prev_char = text.charAt(i - 1);
                if (prev_char == ' ' || prev_char == '') {
                    final_text += char.toLowerCase();
                }
                else {
                    final_text += char
                }
            }
            return final_text;
        case "_Z":
            // Transforms text, making the character after space in uppercase
            for (let i = 0; i < text.length; i++) {
                char = text.charAt(i);
                next_char = text.charAt(i + 1);

                // Check if the next character is a space, or if it is the end of the text
                if (next_char == ' ' || next_char == '') {
                    final_text += char.toUpperCase();
                }
                else {
                    final_text += char;
                }
            }

            return final_text;

        case "a_":
            // Transforms text, making the character after space in lowercase
            for (let i = 0; i < text.length; i++) {
                char = text.charAt(i);
                prev_char = text.charAt(i - 1);

                if (prev_char == ' ' || prev_char == '') {
                    final_text += char.toLowerCase();
                }
                else {
                    final_text += char
                }
            }

            return final_text;

        case "_z":
            // Transforms text, making the character before space in lowercase
            for (let i = 0; i < text.length; i++) {
                char = text.charAt(i);
                next_char = text.charAt(i + 1);

                if (next_char == ' ' || next_char == '') {
                    final_text += char.toLowerCase();
                }
                else {
                    final_text += char
                }
            }

            return final_text;

        case "AEIOU":
            // Transforms text, making all vowels in uppercase
            for (let i = 0; i < text.length; i++) {
                char = text.charAt(i);

                if (/[aeiou]/.test(char)) {
                    final_text += char.toUpperCase();
                }
                else {
                    final_text += char
                }
            }

            return final_text;

        case "aeiou":
            // Transforms text, making all vowels in lowercase
            for (let i = 0; i < text.length; i++) {
                char = text.charAt(i);

                if (/[AEIOU]/.test(char)) {
                    final_text += char.toLowerCase();
                }
                else {
                    final_text += char
                }
            }

            return final_text;

        case "ABC":
            // Transforms text, making all consonants in uppercase
            for (let i = 0; i < text.length; i++) {
                char = text.charAt(i);

                // Check if the character is a lowercase consonant
                if (/[b-df-hj-np-tv-z]/.test(char)) {
                    final_text += char.toUpperCase();
                }
                else {
                    final_text += char
                }
            }

            return final_text;

        case "abc":
            // Transforms text, making all consonants in lowercase
            for (let i = 0; i < text.length; i++) {
                char = text.charAt(i);

                if (/[B-DF-HJ-NP-TV-Z]/.test(char)) {
                    final_text += char.toLowerCase();
                }
                else {
                    final_text += char
                }
            }

            return final_text;

        // Default case if the option does not match any predefined case (shouldn't happen)
        default:
            break;
    }
}