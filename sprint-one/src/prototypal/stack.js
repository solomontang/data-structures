var Stack = function() {
  var newMethods = Object.create(stackMethods);
  newMethods.length = 0;
  newMethods.storage = {};
  return newMethods;
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