import { UserButton } from '@clerk/nextjs'
import React from 'react'
import WelcomeBanner from './WelcomeBanner'

function DashboardHeader() {
  return (
    <div className='p-5 shadow-md bg-white flex justify-end'>
<UserButton/>

    </div>
    
  )
}

export default DashboardHeader