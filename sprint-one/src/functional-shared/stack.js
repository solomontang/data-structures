var Stack = function() {
  var someInstance = {length: 0, storage: {}};
  var stack = _.extend(someInstance, stackMethods);
  return stack;
};


var stackMethods = {
  push: function(value){
    this.storage[this.length] = value;
    this.length++;
  },
  pop: function(value){
    this.length--;
    return this.storage[this.length];
  },
  size: function(value){
    if (this.length < 0){
      this.length = 0;
    }
    return this.length
  },
};