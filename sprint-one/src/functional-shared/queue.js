var Queue = function() {
  var someInstance = {length: 0, index: 0, storage: {}};
  var queue = _.extend(someInstance, queueMethods);
  return queue;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.index] = value;
    this.index++;
    this.length++;
  },

  dequeue: function() {
    this.length--;
    var oldestKey = Object.keys(this.storage)[0];
    var oldestValue = this.storage[oldestKey];
    delete this.storage[oldestKey];
    return oldestValue;
  },

  size: function() {
    if (this.length < 0){
      this.length = 0;
    }
    return this.length;
  },
};

