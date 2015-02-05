var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.queueSize = 0;
  this.head = 0;
  this.storage = {};
};


//methods:
//  enqueue
//  dequeue
//  size
//

Queue.prototype.enqueue = function (value) {
  //add to storage
  this.storage[this.queueSize + this.head] = value;
  //maintain head
  //maintain queueSize
  this.queueSize++;
}

Queue.prototype.dequeue = function () {
  //decrement size if there are elements in queue
  this.queueSize && this.queueSize--;
  //store head element
  var dequeued = this.storage[this.head];
  //pop from the head
  delete this.storage[this.head];
  this.head++;
  return dequeued;
}

Queue.prototype.size = function () {
  return this.queueSize;
}


