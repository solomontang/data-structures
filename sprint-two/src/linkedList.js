var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //find the thing that references the tail
      //which is the node that references the node whose .next is null;
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
    //find the node whose next is null
      //set node.next to Node(value);

    //if list.head is null, setHead and tail
    
  };

  list.removeHead = function() {
    let headValue = list.head.value;
    list.head = list.head.next;
    return headValue;
  };

  list.contains = function(target) {

    let node = list.head;
    while (node !== null) {
      if (node.value === target) {
        return true;
      } else { 
        node = node.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// list = {head: x, tail: z };
// var x = {value: 1, next: y };
// var y = {value: 2, next: z };
// var z = {value: 3, next: a };
// var a = {value:4, next:null}





