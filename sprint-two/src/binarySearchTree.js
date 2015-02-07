var BinarySearchTree = function(value){
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value){
  if (value < this.value) {
    //belongs on the left
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
    } else {
      //recuse on next BST node if left isn't null
      this.left.insert(value);
    }
  } else if (value > this.value) {
    //belongs on the right
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};


BinarySearchTree.prototype.contains = function(value){
  // looks similar to .insert(); maybe refactor later
  var hasValue = false;
  if (this.value === value) {
    hasValue = true;
  } else if (value < this.value) {
    //search on the left
     if (this.left === null) { //need to do a null check
      return false;
    } else {
      //recuse on next BST node if left isn't null
      hasValue = this.left.contains(value);
    }
  } else if (value > this.value) {
    //search on the right
    if (this.right === null) {
      return false;
    } else {
      hasValue = this.right.contains(value);
    }
  }
  return hasValue;

};

BinarySearchTree.prototype.depthFirstLog = function(cb){
  cb(this.value);
  if(this.left !== null){
    this.left.depthFirstLog(cb);
  }
  if(this.right !== null){
    this.right.depthFirstLog(cb);
  }
};

//worth hi-chews
// breadth first search method:
// this is similar to depth first search except:
//   it goes through each horizontal level of the tree
//   before moving on
BinarySearchTree.prototype.breadthFirstLog = function () {

  var bst = this; //don't need an initial argument when calling bFL
  var log = [];
  var queue = new Queue();
  queue.enqueue(bst);
  while(queue.size() > 0){
    var dequeued = queue.dequeue();
    log.push(dequeued.value);

    if(dequeued.left !== null){
      queue.enqueue(dequeued.left);
    }

    if(dequeued.right !== null){
      queue.enqueue(dequeued.right);
    }
  }

  return log;
}

BinarySearchTree.prototype.getMinimumDepth = function(){
  return this.value;
};

BinarySearchTree.prototype.getMaximumDepth = function(){

  var max = 0;
  this.depthFirstLog(function(val){
    max++;
  });
  return max;
};

BinarySearchTree.prototype.shouldRebalanceTree = function(){
  return this.value;
};

BinarySearchTree.prototype.rebalanceTree = function(bst){
  // invoke after shouldRebalanceTree
  var tree = bst || this;
  var log = tree.breadthFirstLog();
  // if we're down to the last node, return this node
  if (log.length === 1) {
    return tree;
  }
  log.sort();


  // get the middle of the sorted log to build the tree with
  var middle = Math.round(log.length / 2);

  // left of middle becomes array of isolated BinarySearchTree nodes
  var left = log.slice(0, middle - 1);
  var leftBST = new BinarySearchTree(left[0]);
  _.each(left, function(v, k){
    if(k > 0){
      leftBST.insert(v);
    }
    // left[k] = new BinarySearchTree(v);
  });

  // right of middle becomes array of isolated BinarySearchTree nodes
  var right = log.slice(middle, log.length);
  var rightBST = new BinarySearchTree(right[0]);
  _.each(right, function(v, k) {
    if(k > 0){
      rightBST.insert(v);
    }
    //right[k] = new BinarySearchTree(v);
  });


  // build new binary search tree
  var rebalancedBST = new BinarySearchTree(middle); //takes the middle value
  // left child of rebalancedBST is the middle of the left log
  rebalancedBST.left = tree.rebalanceTree(leftBST); //issue: line of code is passing an array of BST nodes, not just a BST node
  // right child is middle of right log
  rebalancedBST.right = tree.rebalanceTree(rightBST);

  return rebalancedBST;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
