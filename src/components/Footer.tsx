import React from 'react'
import Link from '../../node_modules/next/link'

function Footer() {
  return (
    <div className='h-12 md:h-24 p-4 lg:px-20 xl:p-40 text-red-500 flex items-center justify-between'>
      <Link href="/" className='font-bold text-xl'>FOODIE</Link>
      <p>©ALL RIGHT RESERVED.</p>
    </div>
  )
}

export default Footer