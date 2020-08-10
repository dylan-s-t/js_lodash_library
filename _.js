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
  },

  invert: function(object) {
    let invertedObject = {};
    for (let key in object) {
      let originalValue = object[key];
      invertedObject[originalValue]=key;
    }
    return invertedObject;
  },

  findKey: function(object, predicate) {
    
    for (let key in object) {
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue) {
        return key;
      }
    }
    return undefined;
  },

  drop: function(array, n) {
    if (n === undefined) {
      n = 1;
    }
    //console.log('array:' + array);
    //console.log('n: ' + n);
    if (n >= array.length) {
      return [];
    } else {
      let droppedArray = array.slice(n);
      //console.log(droppedArray);
      return droppedArray;
    }
  },

  dropWhile: function(array, predicate) {
    //console.log('array: ' + array);
    let dropNumber = array.findIndex(function(element, index) {
      return !predicate(element, index, array);
    });
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
    //console.log('new array:' + droppedArray);
  },

  chunk: function(array, size) {
    if (size === undefined) {
      size = 1;
    }
    let numFullChunks = Math.floor(array.length/size);
    console.log('original array: '+ array);
    console.log('array length:'+ array.length);
    console.log('chunk length: ' + numFullChunks);

    let newArray = [];
    for (let i = 0; i < numFullChunks; i++) {
      let addChunk = array.slice(i*size, i*size+size);
      newArray.push(addChunk);
      console.log(newArray); 
    }
    let remainingBitLength = array.length-(numFullChunks * size);
    console.log('remaining bit: ' + remainingBitLength);

    if (remainingBitLength) {
      newArray.push(array.slice(-1*remainingBitLength));
    }
    return newArray;
  }
 

}


// Do not write or modify code below this line.
module.exports = _;
