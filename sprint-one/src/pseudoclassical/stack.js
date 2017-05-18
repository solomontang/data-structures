var Stack = function() {
  this.length = 0;
  this.storage = {};
};


Stack.prototype.push = function(value){
  this.storage[this.length] = value;
  this.length++;
};

Stack.prototype.pop = function(value){
  this.length--;
  return this.storage[this.length];
};

Stack.prototype.size = function(value){
  if (this.length < 0){
    this.length = 0;
  }
  return this.length;
};
