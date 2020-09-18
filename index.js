function sumItems(array) {
  // Sum all the numbers in the array
  switch(array.length) {
    case 0: 
      return 0;
    case 1:
      // An array with just one number would be the base case. If there is one element in the array, which is itself an array, need to
      // do a recursive call
      return (Array.isArray(array[0])) ? sumItems(array[0]) : array[0];
    default:
      // Once again, check if the first element is an array or a number. If an array, evaluate its sum with a recursive call
      // If a number, just take the number. Either way, you then add it to the sum of the "rest of the array"
      return (Array.isArray(array[0])) ? sumItems(array[0]) + sumItems(array.slice(1)) : array[0] + sumItems(array.slice(1));
  }
}

module.exports = sumItems;