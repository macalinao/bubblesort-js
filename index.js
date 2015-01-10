var bubblesort = module.exports = function(arr, comparator) {
  if (!comparator) {
    comparator = function(a, b) {
      return a - b;
    };
  }

  if (arr.length <= 1) return arr;

  for (;;) {
    for (var i = 0; i < arr.length - 1; i++) {
      if (comparator(arr[i], arr[i + 1]) > 0) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }

    var first = arr[0];
    var sorted = true;
    for (var i = 1; i < arr.length; i++) {
      if (comparator(arr[i - 1], arr[i]) > 0) {
        sorted = false;
        break;
      }
    }
    if (sorted) return arr;
  }
};
