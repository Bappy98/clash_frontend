import Image from 'next/image'
import React from 'react'

function NotFound() {
  return (
    <div className='flex h-screen w-full justify-center items-center'>
        <div>
            <Image src={'not-found.svg'} alt={'not-found'} width={600} height={600} />
        </div>
    </div>
  )
}

export default NotFound