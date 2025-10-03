import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-200">
      <section className="grid grid-rows-2 md:grid-cols-2 h-[91vh]">
        <div className="flex flex-col gap-4 items-center justify-center md:h-[91vh] mt-10 md:mt-0">
          <p className="text-3xl text-purple-800 font-black text-center">ZipLinks - Shorten your URLs in a flash</p>
          <p className="px-20 font-serif text-lg text-center">Say goodbye to long, cumbersome URLs and hello to sleek, concise links with ZipLinks! Whether you’re sharing on social media, sending emails, or embedding in websites, ZipLinks makes it easy to create custom shortened URLs that are both user-friendly and trackable</p>
          <div className='flex gap-5 justify-start text-white'>
            <Link href="/shorten"><button className='bg-purple-700 p-4 py-2.5 font-bold rounded-xl hover:cursor-pointer'>Try Now</button></Link>
            <Link href="https://github.com/Abad-Ali/ZipLinks---Shorten-your-URLs-in-a-flash" target="_blank"><button className='bg-purple-700 p-4 py-2.5 font-bold rounded-xl hover:cursor-pointer'>GitHub</button></Link>
          </div>
        </div>
        <div className="flex justify-start relative md:h-[91vh]">
          <Image className="mix-blend-darken rounded-2xl" src={"/vector2.jpeg"} alt="Vector_img" fill={true} />
        </div>
      </section>
    </main>
  );
}
