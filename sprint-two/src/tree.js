var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {

  var containFlag = false;
  var checkChildren = function (tree) {
    
    if (tree.value === target) { 
      containFlag = true;
    }
    if (tree.children.length > 0) {
      tree.children.forEach(child => checkChildren(child));
    }
  };
  checkChildren(this);
  return containFlag;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
