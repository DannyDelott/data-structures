describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = new BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a("function");
    expect(binarySearchTree.contains).to.be.a("function");
    expect(binarySearchTree.depthFirstLog).to.be.a("function");
  });

  it('should insert values at the correct location in the tree', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
   // console.log(array);
    expect(array).to.eql([5,2,3]);
  });

  // ------ extra credit tests ------ //
  //
  // breadth first search tests
  it('should have a method named breadthFirstLog', function(){
    expect(binarySearchTree.breadthFirstLog).to.be.a("function");
  });

  it('breadthFirstLog should return the log as an array', function(){
    expect(binarySearchTree.breadthFirstLog()).to.be.a("array");
  });

  it('breadthFirstLog should execute level by level', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(7);
    expect(JSON.stringify(binarySearchTree.breadthFirstLog())).to.equal(JSON.stringify([5,2,7]));
    binarySearchTree.insert(3);
    binarySearchTree.insert(6);
    expect(JSON.stringify(binarySearchTree.breadthFirstLog())).to.equal(JSON.stringify([5,2,7,3,6]));
  });

  // rebalance tree tests
  it('should have methods named getMinimumDepth, getMaximumDepth, shouldRebalanceTree, and rebalanceTree', function () {
    expect(binarySearchTree.getMinimumDepth).to.be.a("function");
    expect(binarySearchTree.getMaximumDepth).to.be.a("function");
    expect(binarySearchTree.shouldRebalanceTree).to.be.a("function");
    expect(binarySearchTree.rebalanceTree).to.be.a("function");
  });

  it('getMinimumDepth should return the minimum depth', function () {
    //build a tree with known minimum depth
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7); //minimum depth should be 2
    expect(binarySearchTree.getMinimumDepth()).to.equal(2);
  });
  it('getMaximumDepth should return the maximum depth', function () {
    //build a tree with known maximum depth
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7); //maximum depth should be 3
    expect(binarySearchTree.getMaximumDepth()).to.equal(3);
  });
  it('shouldRebalanceTree should return true when maximum depth is more than twice the minimum depth', function () {
    // build a tree with known maximum and minimum depth
    // maximum depth: 6
    // minimum depth: 2
    var BST = new BinarySearchTree(8);
    BST.insert(7);
    BST.insert(9);
    BST.insert(5);
    BST.insert(2);
    BST.insert(6);
    BST.insert(1);
    BST.insert(3);
    BST.insert(0);
    expect(BST.shouldRebalanceTree()).to.equal(true);
  });
  it('shouldRebalanceTree should return false when maximum depth is less than twice the minimum depth', function () {
    // build a tree with known maximum and minimum depth
    // maximum depth = minimum depth = 2
    var BST = new BinarySearchTree(8);
    BST.insert(7);
    BST.insert(9);
    expect(BST.shouldRebalanceTree()).to.equal(false);
  });
  it('rebalanceTree should rebalance the tree', function () {
    // build a tree with known maximum and minimum depth
    // maximum depth: 6
    // minimum depth: 2
    var BST = new BinarySearchTree(8);
    BST.insert(7);
    BST.insert(9);
    BST.insert(5);
    BST.insert(2);
    BST.insert(6);
    BST.insert(1);
    BST.insert(3);
    BST.insert(0);
    expect(JSON.stringify(BST.rebalanceTree().breadthFirstLog())).to.equal(JSON.stringify([5,2,7,1,3,6,8,0,5,9]));
  });
});
