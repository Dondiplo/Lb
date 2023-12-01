import React from 'react'
import Image from 'next/image'
import to from "public/T-O.svg"
const Nav = () => {
  return (

    <section className='fixed top-14 md:top-12 z-10' >
    <div className=' container  flex justify-between'>
<div>
<Image src={to} alt='to'/>
</div>
<div className='space-x-16 text-white flex '>
    <p>RESUME</p>
    <p>PROJECTS</p>
    <p>CONTACT ME</p>
</div>
    </div>
    </section>
  )
}

export default Nav