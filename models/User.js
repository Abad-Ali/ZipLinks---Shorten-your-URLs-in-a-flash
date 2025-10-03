import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    url: { type: String },
    shorturl: { type: String}
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;


// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     url: { type: String, required: true }, // Make url required
//     shorturl: { type: String,  }, // Make shorturl required
//   },
//   { timestamps: true } // Automatically add createdAt and updatedAt fields
// );

// const User = mongoose.models.User || mongoose.model("User", userSchema);

// export default User;
