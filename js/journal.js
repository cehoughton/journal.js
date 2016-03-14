exports.Journal = function(title, body) {
  this.title = title;
  this.body = body;
};

exports.Journal.prototype.wordCount = function(){
  this.bodyCount = this.body.split(" ").length;
  return this.bodyCount;
};
