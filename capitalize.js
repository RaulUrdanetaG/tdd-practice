export default function capitalize(string) {
  if (typeof string === "string") {
    let wordArray = string.trimStart().split("");
    wordArray[0] = wordArray[0].toUpperCase();
    return wordArray.join("");
  } else {
    return "Not a string";
  }
}
