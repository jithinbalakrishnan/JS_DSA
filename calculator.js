function calculator (n = 0) {
    return {
      add: function(x) {
        n = n + x;
        return this;
      },
      subtract: function(x) {
        n = n - x;
        return this;
      },
      multiply : function(x) {
        n = n * x;
        return this;
      },
      total: function () {
        return n;
      }
    };
  }
  console.log(calculator(1).add(5).subtract(4).multiply(2).total())