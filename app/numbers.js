exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
     return parseInt(num.toString(2)) & (1 << (bit - 1)) ? 1 : 0;
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    if (num < 0 || num > 255 || num % 1 !== 0) {
        throw new Error(num + " does not fit in a byte");
    }
    return ("000000000" + num.toString(2)).substr(-8);
  },

  multiply: function(a, b) {
    return parseFloat( (a * b).toPrecision(1) );
  }
};
