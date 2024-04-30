function reverseString(str) {
    return str.split("").reverse().join("");
  }
  
  let originalString = "Hello";
  let reversedString = reverseString(originalString);
  console.log("Reversed string: " + reversedString);
  