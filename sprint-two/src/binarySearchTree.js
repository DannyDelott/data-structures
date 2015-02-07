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
//breadthFirstLog


//worth lots of hi-chews
//rebalanceTree

/*
 * Complexity: What is the time complexity of the above functions?
 */
