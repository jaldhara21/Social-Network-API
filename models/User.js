const { Schema, model, Types } = require("mongoose");

// Define the User schema
const userSchema = new Schema(
  {
    // User's username
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    // User's email
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    // An array of ObjectId references to the user's thoughts
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    // An array of ObjectId references to the user's friends
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Define a virtual property 'friendCount' to calculate the number of friends
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});
// create the User model using the UserSchema
const User = model("User", userSchema);
// export the User model
module.exports = User;
