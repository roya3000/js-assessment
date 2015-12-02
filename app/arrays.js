exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return arr.reduce(function (prev, cur) {
      return prev + cur;
    }, 0);
  },

  remove : function(arr, item) {
    var index = arr.indexOf(item);

    while (index !== -1) {
       arr.splice(index, 1);
       index = arr.indexOf(item); //update index
    }

    return arr;
  },

  removeWithoutCopy : function(arr, item) {

    var index = arr.indexOf(item);

    while (index !== -1) {
       arr.splice(index, 1);
       index = arr.indexOf(item); //update index
    }

    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return (arr1.concat(arr2));
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        count++;
      }
    }

    return count;
  },

  duplicates : function(arr) {
    var result = [];

    arr.sort(function (a, b) {
      return a - b;
    });

    for (var i = 1; i < arr.length; i++) {
      if (arr[i-1] === arr[i] && result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }

    return result;
  },

  square : function(arr) {
    return arr.map(function (item) {
      return item * item;
    });
  },

  findAllOccurrences : function(arr, target) {

    var result = [];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        result.push(i);
      }
    }

    return result;

  }
};
