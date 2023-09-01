export default function analyzeArray(array) {
  if (typeof array !== "object") {
    return "Not an array";
  }
  let average = array.reduce((a, b) => a + b) / array.length;
  return {
    avg: average,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}
