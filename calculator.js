function add(addNumber1, addNumber2) {
  return addNumber1 + addNumber2;
}

function subtract(subtractNumber1, subtractNumber2) {
  return subtractNumber1 - subtractNumber2;
}

function multiply(multNumber1, ...multNumbers) {
  var mult = multNumber1;
  if (typeof multNumbers !== "number") {
    for (let i = 0; i < multNumbers.length; i++) {
      mult = mult * multNumbers[i];
    }
  } else {
    mult = multNumber1 * multNumbers;
  }
  return mult;
}

function divide(divNumber1, divNumber2) {
  if (divNumber2 == 0) {
    return "Cant divide by 0";
  } else {
    return divNumber1 / divNumber2;
  }
}

export { add, subtract, multiply, divide };
