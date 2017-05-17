var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    size--;
    let numKeys = Object.keys(storage);
    return storage[numKeys[0]];
  };

  someInstance.size = function() {
    if (size < 0){
      return 0;
    }
    return size;
  };

  return someInstance;
};


// people enter at the end of the queue and leave
// from the front (FIFO: first in, first out).