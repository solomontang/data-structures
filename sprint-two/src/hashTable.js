var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // this._storage.set(index, [k, v]);
  var bucket = this._storage[index] || [];
  var contains = false;
  bucket.forEach( (tuple) => {
    if (tuple[0] === k) {
      tuple[1] = v; 
      contains = true;
    }
  });
  if (!contains) {
    bucket.push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)[1];
};

HashTable.prototype.remove = function(k) {
  // debugger;
  var index = getIndexBelowMaxForKey(k, this._limit);
  let aHashArray = this._storage.get(index); 
  
  aHashArray.forEach((tuple, index) => { 
    if (tuple[0] === k) { 
      this._storage.get(index).splice(index, 1, undefined);
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


