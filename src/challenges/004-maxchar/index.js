// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/**
 * baby steps
 * 1) iterate over the string received transforming it on an object
 * 2) use the accumulator and the character variables to
 *  define witch value is higher
 * 3) return the higher char
 */

function maxChar(string) {
  let stringMap = {};
  let acc = 0;
  let character = "";

  for (char of string) {
    stringMap[char] = stringMap[char] + 1 || 1;

    if (stringMap[char] > acc) {
      acc = stringMap[char];
      character = char;
    }
  }

  return character;
}

module.exports = maxChar;
