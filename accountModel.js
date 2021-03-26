var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AccountSchema = new Schema({
    
    name: String,   

},{strict:false});

module.exports = mongoose.model('Account', AccountSchema);


// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var BookSchema = new Schema({
//   title: String,
//   author: String,
//   category: String
// },{ strict: false });

// module.exports = mongoose.model('Book', BookSchema);