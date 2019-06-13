const mongoose = require("mongoose");

// λ /Users/Florent/mongodb/bin/mongod.exe --dbpath=/Users/Florent/mongodb-data

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
})
.then(() => console.log('Connected to database'))
.catch((e) => console.log('Database connection failed', e))