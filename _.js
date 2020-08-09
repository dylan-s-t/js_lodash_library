const _ = {
  clamp: function(number, lower, upper) {
    let lowerClampedValue = Math.max(number, lower)
    let clampedValue = Math.min(lowerClampedValue, upper)
    return clampedValue
  },

  inRange: function(number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }
    if (start > end) {
      let temp = start
      start = end;
      end = temp;
    }
    let isInRange = (number < end && number >= start) 
    return isInRange;
  },

  words: function(str) {
    words = str.split(' ');
    return words;
  },

  pad: function(str, len) {
    console.log('string: ' + str);
    console.log('length: ' + len);
    if (len <= str.length) {
      return str;
    } else {
      let startPaddingLength = Math.floor((len - str.length)/2);
      console.log('start pad: ' + startPaddingLength);
      let endPaddingLength = (len-str.length - startPaddingLength);
      console.log('end pad: ' + endPaddingLength);
      let padChar = ' ';
      let paddedString = padChar.repeat(startPaddingLength) + str + padChar.repeat(endPaddingLength);
      return paddedString;
    }
  },

  has: function(object, key) {
    let hasValue = (object[key] !== undefined);
    return hasValue;
  }

}


// Do not write or modify code below this line.
module.exports = _;
