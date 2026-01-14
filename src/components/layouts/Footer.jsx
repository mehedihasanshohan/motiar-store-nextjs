import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
        <ul className="text-xl text-teal-600 flex justify-center items-center gap-6 font-semibold px-1">
          <li><Link href={"/"}>Services</Link></li>
          <li><Link href={"/"}>Coberage</Link></li>
          <li><Link href={"/"}>About US</Link></li>
          <li><Link href={"/"}>Pricing</Link></li>
          <li><Link href={"/"}>Blog</Link></li>
          <li><Link href={"/"}>Contact</Link></li>
        </ul>
  <nav>
    <div className="grid grid-flow-col gap-4">
      {/* <a href='https://www.facebook.com/profile.php?id=100007820023284' target='_blank'><Image className='w-8 h-8' src={fb} alt="" /></a> */}
      {/* <a href='' target='_blank'><Image className='w-8 h-8' src={gmail} alt="" /></a> */}
      {/* <a href='https://github.com/mehedihasanshohan' target='_blank'><Image className='w-8 h-8' src={github} alt="" /></a> */}
      {/* <a href='https://www.linkedin.com/in/mehedihasanshohan/' target='_blank'><Image className='w-8 h-8' src={linkedin} alt="" /></a> */}
    </div>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by <span className='text-primary font-semibold'>Motiar Store</span></p>
  </aside>
</footer>
  )
}

export default Footer