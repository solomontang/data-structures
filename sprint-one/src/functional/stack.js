var Stack = function() {
  var storage = {};
  var size = 0;
  var someInstance = {
    push: function(value) {
    storage[size] = value;
    size++;
    },
    pop: function() {
    size--;
    return storage[size];
    },
    size: function() {
    if (size < 0){
      return 0;
    }
    return size;
    }
  };

  return someInstance;
};


// var Stack = function() {
//   var size = 0;
//   var storage = {};

//   var someInstance = {};
//   someInstance.push = function(value) {
//     storage[size] = value;
//     size++;
//   };

//   someInstance.pop = function() {
//     size--;
//     return storage[size];
//   };

//   someInstance.size = function() {
//     if (size < 0){
//       return 0;
//     }
//     return size;
//   };

//   return someInstance;
// };

