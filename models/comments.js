let mongoose = require('mongoose');

let Schema = mongoose.Schema; 

var commentSchema = new Schema({
  
  body: String

});

// This creates our model from the above schema, using mongoose's model method
var Comment = mongoose.model("Comment", commentSchema);


module.exports = Comment;