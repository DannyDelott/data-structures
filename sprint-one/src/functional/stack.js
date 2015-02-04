var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below
  someInstance.push = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.pop = function(){
    size && size--;
    var popped = storage[size];
    //remove element from storage
    delete storage[size];
    //return the element removed
    return popped;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
