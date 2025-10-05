import React from 'react'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className='bg-purple-200 min-h-[80vh] p-15'>
      <div className='grid md:grid-cols-2 '>
          <div className=""> 
              <Image className="mix-blend-darken rounded-2xl" src="/contact.avif" alt="contact_img" width={500} height={500} />
          </div>
          <div className='flex flex-col gap-4 items-center justify-center'>
            <h1 className='text-4xl text-purple-800 font-black text-center'>Contact Us</h1>
            <p className='px-20 font-serif md:text-lg text-xs text-center'>Thank you for visiting ZipLinks! We’re here to help you make the most of our URL shortening service.</p>
          </div>
      </div>

      <div className='grid md:grid-cols-2 '>
          <div className="block md:hidden mr-15"> 
              <Image className="mix-blend-darken rounded-2xl" src="/support.avif" alt="support_img" width={500} height={500} />
          </div>
          <div className='flex flex-col gap-4 items-center justify-center'>
            <h1 className='text-4xl text-purple-800 font-black text-center'>Get in Touch</h1>
            <p className='px-20 font-serif md:text-lg text-xs text-center'>Email: For general inquiries, please contact us at ZipLinks07@gmail.com.</p>
            <p className='px-20 font-serif md:text-lg text-xs text-center'>Support: If you need help with using ZipLinks or have a technical issue, then please reach out to our support team at support@ziplinks.com.</p>
          </div>
          <div className="hidden md:block"> 
              <Image className="mix-blend-darken rounded-2xl" src="/support.avif" alt="support_img" width={500} height={500} />
          </div>
      </div>

      <div className='grid md:grid-cols-2 '>
        <div className=""> 
          <Image className="mix-blend-darken rounded-2xl" src="/social_media.avif" alt="social_media_img" width={500} height={500} />
        </div>
        <div className='flex flex-col gap-4 items-center justify-center'>
          <h1 className='text-4xl text-purple-800 font-black text-center'>Social Media:</h1>
          <p className='px-20 font-serif md:text-lg text-xs text-center'>Follow us on social media for updates, tips, and community engagemen</p>
          <ol className='font-semibold list-disc md:text-lg text-xs'>
            <li>Facebook: ZipLinks07</li>
            <li>Twitter: ZipLinks_127</li>
            <li>LinkedIn: ZipLinks_07</li>
          </ol>
        </div>
      </div>
      <div className='flex justify-center text-base md:text-2xl font-bold font-serif mt-5'>Thank you for visiting ZipLinks!</div>
    </div>
  )
}

export default Contact

