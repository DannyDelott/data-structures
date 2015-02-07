var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// insert method:
// hashes key to get the bucket index
// creates tuple, stores in bucket
// profit!
HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if(!Array.isArray(bucket) || bucket === null){
    bucket = [];
  }
  var tuple = [k, v];
  bucket.push(tuple);
  this._storage.set(i, bucket);
};

// retrieve method:
// hashes key to get bucket index
// iterates over tuples in bucket to return value
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

// remove method:
// hashes key to get desired bucket index
// iterates through tuples in bucket, removing tuple
HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  _.each(bucket, function(tuple, key, collection){
    if(tuple[0] === k){
      bucket.splice(key, 1); // our tuple
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
