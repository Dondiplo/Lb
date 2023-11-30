import React from 'react'
import Image from 'next/image'
import to from "public/T-O.svg"
const Nav = () => {
  return (

    <section >
    <div className=' container my-10 flex justify-between'>
<div>
<Image src={to} alt='to'/>
</div>
<div className='space-x-10 text-white flex '>
    <p>RESUME</p>
    <p>PROJECTS</p>
    <p>CONTACT ME</p>
</div>
    </div>
    </section>
  )
}

export default Nav