var Queue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue.queueSize = 0;
  newQueue.first = 0;
  newQueue.storage = {};

  return newQueue;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {};

// enqueue
queueMethods.enqueue = function(value){
  this.storage[this.queueSize + this.first] = value;
  this.queueSize++;
};

// dequeue
queueMethods.dequeue = function(){
  this.queueSize && this.queueSize--;
  var dequeued = this.storage[this.first];
  delete this.storage[this.first];
  this.first++;
  return dequeued;
};

// size
queueMethods.size = function(){
  return this.queueSize;
};
