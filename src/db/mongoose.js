const mongoose = require("mongoose");

// λ /Users/Florent/mongodb/bin/mongod.exe --dbpath=/Users/Florent/mongodb-data

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});
