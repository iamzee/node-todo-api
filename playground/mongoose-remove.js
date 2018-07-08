const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

//  Remove all documensts from the collection
//  this will not return the reomved todos
Todo.remove({}).then(res => {
  console.log(res);
});

//  Remove the first matched document
//  Here we get the removed methiod in the callback
Todo.findOneAndRemove()
  .then()
  .catch();

Todo.findByIdAndRemove()
  .then()
  .catch();
