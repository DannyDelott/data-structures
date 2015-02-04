var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var first = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size + first] = value;
    size++;
  };

  someInstance.dequeue = function(){

    if(size > 0){
      var dequeued = storage[first];
      delete storage[first];
      size--;
      first++;
      return dequeued;
    }


  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
