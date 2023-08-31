export default function reverseString(string) {
  return typeof string === "string"
    ? string.split("").reverse().join("")
    : "Not a string";
}
