var Queue = function() {
  var methods = Object.create(queueMethods);
  methods.length = 0;
  methods.index = 0;
  methods.storage = {};
  return methods;
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