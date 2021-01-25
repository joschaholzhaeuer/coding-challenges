// Given a string s, find the length of the longest substring without repeating characters.
// Input: s = 'abcabcbb'
// Output: 3
// Explanation: The answer is 'abc', with the length of 3.

const text = 'abcadbkcebbbecaabcdeefgh';

function getLongestSubstring(input) {
  const textArray = Array.from(text);
  let longestSubstrings = [];

  // iterate over each substring
  textArray.forEach((currentString, indexOfStartString) => {
    let currentLength = 1;
    let checkedStrings = [...currentString];

    for (const [index, innerSubstring] of textArray.entries()) {
      // begin at start string index
      if (index <= indexOfStartString) {
        saveAndReset(currentLength, longestSubstrings);
        continue;
      }

      // check substring for duplicates and update current substring length
      if (!checkedStrings.includes(innerSubstring)) {
        currentLength += 1;
        checkedStrings.push(innerSubstring);

        // save length when string ends
        if (index === textArray.length - 1) {
          saveAndReset(currentLength, longestSubstrings);
          break;
        }

        // reset memory and save length
      } else {
        saveAndReset(currentLength, longestSubstrings);
        break;
      }
    };

    function saveAndReset(currentLength, longestSubstrings) {
      longestSubstrings.push(currentLength);
      currentLength = 1;
      checkedStrings = [];
    }
  });

  return longestSubstrings.sort((a, b) => b - a).shift();
}

console.log(getLongestSubstring(text));
