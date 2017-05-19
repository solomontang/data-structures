var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = [];  // fix me 

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  debugger;
  //pattern should reflect getElementsByClassName
  //use a recursive function to set a contain flag
  //return flag
  var containFlag = false;
  var checkChildren = function (tree) {
    
    if (tree.value === target) { 
      containFlag = true;
    }
    if (tree.children.length > 0) {
      console.log('what');
      //recurse over this function and adjust flag as necessary.
      _.each(tree.children, function(child) { 
        checkChildren(child);   
      });
    }
  };

  return containFlag;
};

var tree = new Tree();
tree.addChild(5);

/*
 * Complexity: What is the time complexity of the above functions?
 */
