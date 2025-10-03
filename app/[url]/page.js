import { redirect } from "next/navigation";
import connectionToDatabase from "@/lib/mongodb";
import User from "@/models/User";

// This is a dynamic route handler for short URLs
export default async function Page({ params }) {
  const { url } = await params;

  await connectionToDatabase();

  const user = await User.findOne({ shorturl: url });

  if (user) {
    // Redirect to the original full URL
    redirect(user.url);
  } else {
    // Redirect to base URL (home or fallback) if shorturl not found
    redirect(process.env.NEXT_PUBLIC_HOST || "/");
  }
}
