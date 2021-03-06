const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

// shortcut variable
const db = mongoose.connection;

db.on('connected', function() {
  console.log(`Connected to Mongoose at ${db.host}:${db.port}`);
});