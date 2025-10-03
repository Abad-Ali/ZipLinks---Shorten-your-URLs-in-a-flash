"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className='relative z-10 h-15 bg-slate-950 text-white md:flex justify-between items-center px-3'>
          
          <div className='flex pt-3 md:pt-0 justify-between'>
          <div className='text-4xl md:text-2xl text-purple-800 font-black font-serif flex justify-center'>
            <img className='w-7 rounded-full mr-2 border-[0.5] border-purple' src='./favicon.ico' alt='logo'></img>
            ZipLinks
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
            </button>
          </div></div>
          <div className={`${isOpen ? 'block' : 'hidden'} md:block`}>
          <ul className='md:flex justify-center gap-5 items-center font-semibold mt-7 md:mt-0 px-5 md:px-0 text-2xl md:text-base'>
              <Link href="/"><li className='hover:text-purple-500 my-3'>Home</li></Link> 
              <Link href="/about"><li className='hover:text-purple-500 my-3'>About</li></Link> 
              <Link href="/contact"><li className='hover:text-purple-500 my-3'>Contact</li></Link> 
              <Link href="/shorten"><li className='hover:text-purple-500 my-3 mb-4 md:mb-3'>Shorten_Links</li></Link> 
              <li className='flex gap-3 pt-3 md:pt-0'>
                <Link href="/shorten"><button className='bg-purple-700 p-3 py-1.5 font-bold rounded-xl hover:cursor-pointer'>Try Now</button></Link>
                <Link href="https://github.com/Abad-Ali" target='_blank'><button className='bg-purple-700 p-3 py-1.5 font-bold rounded-xl hover:cursor-pointer'>GitHub</button></Link>
              </li>
              </ul>
        </div>
      </nav>  
 
     { isOpen && (
       <div
         className="fixed inset-0 bg-slate-900 bg-opacity-90 z-2 md:hidden"
         onClick={toggleMenu}
       ></div>
     )}
    </>
  )
}

export default Navbar
