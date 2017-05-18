var Queue = function() {
  var storage = {};
  let size = 0;
  let index = 0;

  var someInstance = {};
  someInstance.enqueue = function(value) {
    storage[index] = value;
    size++;
    index++;
  };

  someInstance.dequeue = function() {
    size--;
    let indexKeys = Object.keys(storage);
    let oldValue = storage[indexKeys[0]];
    delete storage[indexKeys[0]]
    return oldValue;
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