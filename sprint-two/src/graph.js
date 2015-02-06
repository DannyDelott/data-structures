

var Graph = function(){
  this.nodes = [];
  this.edges = {};

};

Graph.prototype.addNode = function(node){
  this.nodes.push(node);
};

Graph.prototype.contains = function(node){
  var hasNode = false;
  //look through the graph for a node
  //  iterate through nodes searching for node
  _.each(this.nodes, function(element) {
    if (element === node) {
      hasNode = true;
    }
  });
  return hasNode;
};

Graph.prototype.removeNode = function(node){
  //modify to remove the flip case
  _.each(this.nodes, function(value, key, collection) {
    if (value === node){
      if(key < collection.length -1){
        collection.splice(key, key+1);
      } else{
        collection.pop();
      }
    }
  });
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var edgeFound = false;
  _.each(this.edges, function(to, from){
    if((from === fromNode && to === toNode) ||
      (to === fromNode && from === toNode)) {
      edgeFound = true;
    }
  });

  return edgeFound;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.edges[fromNode] = toNode;
  //add the flip case
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  /*console.log("before", this.edges[fromNode]);
  delete this.edges[fromNode];
  console.log("after", this.edges[fromNode]);*/
  console.log("started from the bottom");
};

Graph.prototype.forEachNode = function(cb){
  //similar to each()
  //nodes are in an array. want to iterate through it
  //use _.each(collection, iterator)
  //  collection is our nodes[]
  //  iterator is our cb function
  _.each(this.nodes, cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



