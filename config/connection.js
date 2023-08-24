const { connect, connection, default: mongoose } = require("mongoose");

mongoose.connect("mongodb://localhost:27017/socialNetworkDB")
// Wrap mongoose around local connection to mongoDB
const connectionString = "mongodb://localhost:27017/socialNetworkDB";

mongoose.connect(connectionString,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export connection
module.exports = mongoose.connection;
