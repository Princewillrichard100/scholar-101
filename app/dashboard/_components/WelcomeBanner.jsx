"use client"

import React from 'react'
import { useUser } from '@clerk/nextjs';
import Image from 'next/image';

function WelcomeBanner() {
    const {user}=useUser();
  return (
    <div className='p-5 bg-primary w-full text-white rounded-[8px] flex items-center gap-6'>
    <Image src={'/laptop.svg'} alt='Laptop' width={100} height={100}/>
   <div>
<h2 className='text-3xl font-bold'>Welcome to Scholar 101, {user?.fullName}!</h2>
<p className='text-sm mt-2'>Your journey to academic excellence starts here. Explore our features, connect with peers, and make the most of your learning experience.</p>
    {/* <p className='text-sm mt-2'>If you have any questions, feel free to reach out to our support team.</p>
    <p className='text-sm mt-2'>Happy learning!</p> */}
    </div>
    </div>
  )
}

export default WelcomeBanner