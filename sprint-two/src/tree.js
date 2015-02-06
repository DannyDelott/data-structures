var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  // your code here
  //
  // don't forget the _.extend
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target){
  var hasTarget = false;

  if (this.value === target) {
    hasTarget = true;
  }else if (this.children.length > 0) {
    _.each(this.children, function(child) {
      if(child.contains(target)){
        hasTarget = true;
      }
    });
  }
  return hasTarget;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
