var BinarySearchTree = function(value) {
  var binaryTree = Object.create(binaryMethods);
  binaryTree.left = null;
  binaryTree.right = null;
  binaryTree.value = value;
  //like tree, but with maximum two branches per tree
  //tree has a value
  //branch with value smaller than parent always in pos 0, larger in pos 1
  return binaryTree;
};

binaryMethods = {};


binaryMethods.insert = function(value) { 

  if (this.value === undefined) { // (this === null || undefined)
    this.value = value; // BinarySearchTree(value); 
  } else {
    //recursive function here that contains following logic
    var compareNextTree = function(tree) {
      if (value < tree.value) { 
        if (tree.left === null) {
          tree.left = BinarySearchTree(value); 
        } else {
          compareNextTree(tree.left);
        }
      } else { 
        if (tree.right === null) { 
          tree.right = BinarySearchTree(value);
        } else { 
          compareNextTree(tree.right);
        } 
      }
    };
    compareNextTree(this);
  }
};

binaryMethods.contains = function(target) { 
  let containFlag = false; 

  var checkNextTree = function(tree) { 
    if (target === tree.value) { 
      containFlag = true;
    } else { 
      if (target < tree.value && tree.left !== null) {
        checkNextTree(tree.left);
      } else if (target > tree.value && tree.right !== null) { 
        checkNextTree(tree.right);
      }
    }
  };
  checkNextTree(this);
  return containFlag;
};

binaryMethods.depthFirstLog = function(callback) {
  if (this.value !== undefined) {
    callback(this.value);
  }  
  var callAllTrees = function(tree) { 
    if (tree.left !== null) {
      callback(tree.left.value);
      callAllTrees(tree.left);
    }
    if (tree.right !== null) { 
      callback(tree.right.value);
      callAllTrees(tree.right);
    }
  };
  callAllTrees(this);
};













/*
 * Complexity: What is the time complexity of the above functions?
 */
