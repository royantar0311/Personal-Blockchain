var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Account = require('./accountModel');

var port = 8080;
var db = 'mongodb://localhost/AccountDB'

mongoose.connect(db);

app.use(express.json())
app.get('/', function(req, res) {
    res.send('happy to be here');
  });




app.listen(port, function() {
  console.log('app listening on port ' + port);
});

app.get('/accounts', function(req, res) {
    console.log('getting all accounts');
    Account.find({})
      .exec(function(err, books) {
        if(err) {
          res.send('error occured')
        } else {
          console.log(books);
          res.json(books);
        }
      });
});

app.get('/accounts/:id', function(req, res) {
    console.log('getting all accounts');
    Account.findOne({
      _id: req.params.id
      })
      .exec(function(err, accounts) {
        if(err) {
          res.send('error occured!')
        } else {
          console.log(accounts);
          res.json(accounts);
        }
      });
  });


app.post('/account', function(req, res) {

    let essential_keys = ['username','password']
    for(let key of essential_keys)
        if(req.body[key] === undefined)
            return res.send('Some elements of the account are missing')

    let account = req.body
    account.password = sha256(account.password)
    Account.create(account, function(err, account) {
      if(err) {
        res.send('error saving account');
      } else {
        console.log(account);
        res.send(account);
      }
    });
});



/*




var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Book = require('./accountModel');

var port = 8080;
var db = 'mongodb://localhost/example'

mongoose.connect(db);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(req, res) {
  res.send('happy to be here');
});

app.get('/books', function(req, res) {
  console.log('getting all books');
  Book.find({})
    .exec(function(err, books) {
      if(err) {
        res.send('error occured')
      } else {
        console.log(books);
        res.json(books);
      }
    });
});

app.get('/books/:id', function(req, res) {
  console.log('getting all books');
  Book.findOne({
    _id: req.params.id
    })
    .exec(function(err, books) {
      if(err) {
        res.send('error occured')
      } else {
        console.log(books);
        res.json(books);
      }
    });
});

app.post('/book', function(req, res) {
  var newBook = new Book();

  newBook.title = req.body.title;
  newBook.author = req.body.author;
  newBook.category = req.body.category;

  newBook.save(function(err, book) {
    if(err) {
      res.send('error saving book');
    } else {
      console.log(book);
      res.send(book);
    }
  });
});

app.post('/book2', function(req, res) {
  Book.create(req.body, function(err, book) {
    if(err) {
      res.send('error saving book');
    } else {
      console.log(book);
      res.send(book);
    }
  });
});

app.put('/book/:id', function(req, res) {
  Book.findOneAndUpdate({
    _id: req.params.id
    },
    { $set: { title: req.body.title }
  }, {upsert: true}, function(err, newBook) {
    if (err) {
      res.send('error updating ');
    } else {
      console.log(newBook);
      res.send(newBook);
    }
  });
});

app.delete('/book/:id', function(req, res) {
  Book.findOneAndRemove({
    _id: req.params.id
  }, function(err, book) {
    if(err) {
      res.send('error removing')
    } else {
      console.log(book);
      res.status(204);
    }
  });
});

app.listen(port, function() {
  console.log('app listening on port ' + port);
}) ;

*/