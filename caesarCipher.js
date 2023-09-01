const alphabet = "abcdefghijklmnopqrstuvwxyz";

export default function caesarCipher(string, offset) {
  if (typeof string !== "string") {
    return "Not a string";
  }
  
  let stringToArray = string.toLowerCase().split("");
  let newArray = [];

  stringToArray.forEach((element) => {
    if (alphabet.includes(element)) {
      let index = alphabet.indexOf(element);
      index + offset >= alphabet.length
        ? newArray.push(alphabet[index - 26 + offset])
        : newArray.push(alphabet[index + offset]);
    } else {
      newArray.push(element);
    }
  });
  return newArray.join("");
}
