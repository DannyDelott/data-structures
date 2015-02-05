var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //
  //queue is like a line
  //  FIFO
  //need size of queue
  //need to maintain where the first index is
  var newQueue = {};
  newQueue.storage = {};
  newQueue.queueSize = 0;
  newQueue.first = 0;
  _.extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  //add value to end of queue
  this.storage[this.queueSize + this.first] = value;
  //increment size
  this.queueSize++;
}

queueMethods.dequeue = function () {
  this.queueSize && this.queueSize--;
  var dequeued = this.storage[this.first];
  delete this.storage[this.first];
  this.first++;
  return dequeued;
}

queueMethods.size = function () {
  return this.queueSize;
}



