var BinarySearchTree = function(value){
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value){
  var newBST = new BinarySearchTree(value);
  if (value < this.value) {
    //belongs on the left
    if (this.left === null) {
      this.left = newBST;
    } else {
      //recuse on next BST node if left isn't null
      this.left.insert(value);
    }
  } else if (value > this.value) {
    //belongs on the right
    if (this.right === null) {
      this.right = newBST;
    } else {
      this.right.insert(value);
    }
  }
};


BinarySearchTree.prototype.contains = function(value){
  return true;

};

BinarySearchTree.prototype.depthFirstLog = function(cb){

};

//worth hi-chews
//breadthFirstLog


//worth lots of hi-chews
//rebalanceTree

/*
 * Complexity: What is the time complexity of the above functions?
 */
