export default function capitalizeWord(string) {
  let wordArray = string.trimStart().split("");
  wordArray[0] = wordArray[0].toUpperCase();
  return wordArray.join("");
}
