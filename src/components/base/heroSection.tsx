import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function heroSection() {
  return (
    <div className='w-full h-screen flex justify-center items-center flex-col'>
        <div>
            <Image src='banner.svg' alt='banner' width={600} height={600}/>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-2xl md:text-7xl lg:text-9xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text '>Clash</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <Link href='/login'>
            <Button className='bg-slate-900 text-gray-50'>Start free</Button>
            </Link>
        </div>
    </div>
  )
}

export default heroSection