var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this.retrieve(k);
  if(!Array.isArray(bucket) || bucket === null){
    bucket = [];
  }
  //is there a bucket at this index?
  //no?
  //  make a bucket
  //put tuple into bucket
  //profit!
  var tuple = [k, v];
  bucket.push(tuple);

  // this._storage.set(i, tuple);
  this._storage.set(i, bucket);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var retrieved = null;
  _.each(bucket, function(tuple, key, collection){
    if(tuple[0] === k){
      retrieved = tuple[1];
    }
  });
  return retrieved;

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  _.each(bucket, function(tuple, key, collection){
    if(tuple[0] === k){

    }
  });
 // this._storage.each(this._storage[i], function(item, key, collection){
 //   if(key === i){

 //   }
 // });
  this._storage.set(i, null);
  //we're deleting whole tuple here
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
