"use client"
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setgenerated] = useState("")

    const generate = ()=>{
      const myHeaders = new Headers();
       myHeaders.append("Content-Type", "application/json");
       
       const raw = JSON.stringify({
         "url": url,
         "shorturl": shorturl
       });
       
       const requestOptions = {
         method: "POST",
         headers: myHeaders,
         body: raw,
         redirect: "follow"
       };
       
       fetch("/api/users", requestOptions)
         .then((response) => response.json())
         .then((result) => {
            setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
            seturl("")
            setshorturl("")
            console.log(result)
            alert(result.message)
          })
         .catch((error) => console.error(error));
    }

  return (
    <div className='min-h-[50vh] md:min-h-[120vh] bg-purple-400 p-15 pb-60'>
      <div className='flex justify-center pb-10'><h1 className='text-4xl text-purple-800 font-black text-center'>ZipLinks - Shorten your URLs in a flash</h1></div>
        <div className='mx-auto max-w-xl bg-purple-300 p-10 rounded-2xl'>
          <h1 className='flex justify-center font-bold font-serif text-3xl mb-5'>Generate your short URLs</h1>
            <div className='mt-3'>
              <input className='px-3 py-2 outline-purple-600 w-full border rounded-2xl mb-5 font-semibold' type='text' placeholder='Enter your full URL to shorten' value={url} onChange={e=>{seturl(e.target.value)}} />
              <input className='px-3 py-2 outline-purple-600 w-full border rounded-2xl font-semibold' type='text' placeholder='Pick your custom short link' value={shorturl} onChange={e=>{setshorturl(e.target.value)}}/>
              <button onClick={generate} className='bg-purple-700 p-3 rounded-2xl text-white font-bold hover:cursor-pointer w-full mt-7 mb-3'>Generate Short URL</button>
            </div>

            {generated && <> <span className='font-bold text-xl'>Your Link:</span><code> <Link 
            target="_blank" href={generated}>{generated}</Link>
            </code></>}
            
            <div className="relative w-full h-65"> {/* Set your desired height */}
              <Image className="mix-blend-darken rounded-2xl" src="/generate.jpg" alt="generate_img" width={500} height={500} />
            </div>
        </div>
    </div>  
  )
}

export default Shorten
