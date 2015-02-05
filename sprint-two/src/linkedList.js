var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){

    var node = Node(value);

    // if empty list
    if(!list.head && !list.tail){
      list.head = node;
      list.tail = node;
    } else { //else if elements exist in the list
      list.tail.next = node;
      list.tail = node;
    }
  };

  //come back to this for border cases
  // empty list? single element (next = null)?
  list.removeHead = function(){
    var removed = list.head;
    var newHead = list.head.next;
    delete list.head;
    list.head = newHead;
    return removed.value;
  };

  list.contains = function(target){
    var hasTarget = false;
    var currentNode = list.head;

    while(currentNode && !hasTarget){
      if(currentNode.value === target){
         hasTarget = true;
      }else {
        currentNode = currentNode.next;
      }
    }

    return hasTarget;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
