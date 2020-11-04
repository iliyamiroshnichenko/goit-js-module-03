function findLongestWord(string = "") {
  // Write code under this line
  const stringToArray = string.split(" ");
  let maxLength = 0;
  let longestWord = "";
  for (const word of stringToArr) {
    if (word.length > maxLength) {
      maxLength = word.length;
      longestWord = word;
    }
  }
    return longestWord;
}


console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'

console.log(findLongestWord("1 23 qwe qwert df adfsdfg efrfgergreghrtgyrthgt 55"));
