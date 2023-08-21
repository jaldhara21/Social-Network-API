const { connect, connection } = require("mongoose");

// Wrap mongoose around local connection to mongoDB
const connectionString =
  process.env.MONGODB_URL || "mongodb://localhost:27017/socialNetworkDB";

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export connection
module.exports = connection;
