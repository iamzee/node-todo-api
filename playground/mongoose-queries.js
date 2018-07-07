const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

const id = '5b3fa61541df441870cc6fb911';

//  takes string and return true if it is a valid ObjectID
if (!ObjectID.isValid(id)) {
  console.log('Id not valid');
}

//  Return an array of matching items
//  mongoose automatically converts string ID to ObjectID
Todo.find({ _id: id }).then(docs => {
  console.log(docs);
});

//  Find the first matching one
//  Do not return array
Todo.findOne({ completed: false }).then(doc => {
  console.log(doc);
});

//  Just pass the id string to findById()
Todo.findById(id).then(doc => {
  if (!doc) {
    return console.log('Todo not found');
  }
  console.log('findById()', doc);
});
