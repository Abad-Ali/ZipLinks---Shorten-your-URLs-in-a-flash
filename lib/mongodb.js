import mongoose from "mongoose";


const connectionToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to database");
    } catch (err) {
        console.error( err);
    }
};

export default connectionToDatabase;


// import mongoose from "mongoose";

// let isConnected = false; // Global flag to track the connection

// const connectionToDatabase = async () => {
//   if (isConnected) {
//     // Prevent re-connecting in case it's already connected
//     console.log("✅ MongoDB already connected");
//     return;
//   }

//   try {
//     const db = await mongoose.connect(process.env.MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     isConnected = db.connections[0].readyState === 1;
//     console.log("✅ Connected to MongoDB");
//   } catch (err) {
//     console.error("❌ MongoDB connection error:", err);
//     throw err; // Throw the error so it can be caught by the API route
//   }
// };

// export default connectionToDatabase;

