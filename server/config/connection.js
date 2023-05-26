const mongoose = require('mongoose');

/* mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks'); */
/* mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks', { */
mongoose.connect("mongodb+srv://ofullente:zBIqH8PhlVbOYRBS@cluster0.cgoou9j.mongodb.net/googlebooks?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
