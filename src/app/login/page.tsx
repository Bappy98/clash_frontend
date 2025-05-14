import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'

function Login() {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='w-[520px] bg-slate-100 rounded-xl py-5 px-10 shadow-md'>
             <h1 className='text-2xl md:text-7xl lg:text-9xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text text-center'>Clash</h1>
            <h1 className='text-3xl font-bold'>Login</h1>
            <form action="">
                <div className='mt-4'>
                    <label htmlFor="email">Email</label>
                    <Input id='email' name='email' type='email' placeholder='Enter your email'/>
                </div>
                <div className='mt-4'>
                    <label htmlFor="password">Password</label>
                    <Input id='password' name='password' type='password' placeholder='Enter your password'/>
                    <div className='text-right font-bold'>
                        <Link href='forgot-password'>Forgot Password?</Link>
                    </div>
                </div>
                <div className='mt-4'>
                    <Button className='w-full bg-stone-800 text-gray-100'>Login</Button>
                </div>
            </form>
            <div>
                <p className='text-center mt-4'>Don't have an account? <strong><Link href='/register'>Register</Link></strong></p>
            </div>
        </div>
    </div>
  )
}

export default Login