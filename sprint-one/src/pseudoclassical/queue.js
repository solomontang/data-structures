var Queue = function() {
  this.length = 0;
  this.index = 0;
  this.storage = {}
};

Queue.prototype.enqueue = function(value){
  this.storage[this.index] = value;
  this.length++;
  this.index++;
}

Queue.prototype.dequeue = function(){
  this.length--;
  var oldestKey = Object.keys(this.storage)[0];
  var oldestValue = this.storage[oldestKey];
  delete this.storage[oldestKey];
  return oldestValue;
}

Queue.prototype.size = function(){
  if (this.length < 0){
    this.length = 0;
  }
  return this.length;
}
