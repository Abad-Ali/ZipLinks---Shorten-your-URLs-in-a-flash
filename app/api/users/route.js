// import { NextResponse } from "next/server";

// export async function GET() {
//   return NextResponse.json({ message: "Hello from API route!" }, { status: 200 });
// }

import connectionToDatabase from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(request) {
  try{
    await connectionToDatabase();
    const {url, shorturl} = await request.json()

    const existingUser = await User.findOne({ shorturl });

    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "Short URL already exists." },
        { status: 409 } // 409 Conflict
      );
    }

    const newUser = new User({url, shorturl});
    await newUser.save();
    return NextResponse.json({ success: true, message: "Short URL generated successfully" },
      { status: 200 });
  }catch(err){
    console.log(err);
  }
}

// import connectionToDatabase from "@/lib/mongodb";
// import User from "@/models/User";
// import { NextResponse } from "next/server";

// export async function POST(request) {
//   try {
//     // Step 1: Connect to the database
//     await connectionToDatabase();

//     // Step 2: Parse the request body
//     const { url, shorturl } = await request.json();

//     // Step 3: Validate input
//     if (!url || !shorturl) {
//       return NextResponse.json(
//         { error: "Both 'url' and 'shorturl' are required" },
//         { status: 400 }
//       );
//     }

//     // Step 4: Create and save a new User
//     const newUser = new User({ url, shorturl });
//     await newUser.save();

//     // Step 5: Return the newly created user
//     return NextResponse.json(newUser, { status: 200 });
//   } catch (err) {
//     console.error("POST /api/generate error:", err); // Log the full error for debugging
//     return NextResponse.json(
//       { error: err?.message || "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }
