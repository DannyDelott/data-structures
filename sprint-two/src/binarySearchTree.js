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

BinarySearchTree.prototype.rebalanceTree = function(){
  // invoke after shouldRebalanceTree

  var log = this.breadthFirstLog();
  log.sort();

  // get the middle of the sorted log to build the tree with
  var middle = Math.round(bfl.length / 2);
  // build new binary search tree
  var rebalancedBST = new BinarySearchTree(middle); //takes the middle value

  // left of middle
  var left = log.splice(0, middle);

  // right of middle
  var right = [];

 // return this.value;
};

//worth lots of hi-chews
//rebalanceTree

/*
 * Complexity: What is the time complexity of the above functions?
 */
