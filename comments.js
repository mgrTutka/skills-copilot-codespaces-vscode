// Create web server
// Run: node comments.js
// Test: curl -d "user=John&comment=Hello" http://localhost:3000/comments
// Test: curl http://localhost:3000/comments
// Test: curl -X DELETE http://localhost:3000/comments/1
// Test: curl -X PUT -d "user=John&comment=Hello" http://localhost:3000/comments/1
// Test: curl -X PUT -d "user=John&comment=Hello" http://localhost:3000/comments/100
// Test: curl -X PUT -d "user=John&comment=Hello" http://localhost:3000/comments/1

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var comments = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/comments', function(req, res) {
  res.json(comments);
});

app.post('/comments', function(req, res) {
  var newComment = {
    user: req.body.user,
    comment: req.body.comment
  };

  comments.push(newComment);
  res.json(newComment);
});

app.delete('/comments/:id', function(req, res) {
  var id = req.params.id;
  var index = parseInt(id);
  var deleted = comments.splice(index, 1);

  res.json(deleted);
});

app.put('/comments/:id', function(req, res) {
  var id = req.params.id;
  var index = parseInt(id);
  var updatedComment = {
    user: req.body.user,
    comment: req.body.comment
  };

  comments[index] = updatedComment;
  res.json(updatedComment);
});

app.listen(3000, function() {
  console.log('Server is running on port 3000');
});