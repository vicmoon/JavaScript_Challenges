// function countOccurrences(str, letter) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     // console.log(str, i);
//     console.log(str[i]);
//     if (str[i] === letter) {
//       count++;
//     }
//   }
//   return count;
// }

//Split

const countOccurrences = (str, letter) => str.split(letter).length - 1;

module.exports = countOccurrences;
