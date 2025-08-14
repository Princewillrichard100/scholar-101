import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

function CourseCardItem({ course }) {
  return (
    <div className='border p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
        <div>
            <div className='flex justify-between items center'>
                <Image src={'/Happy-Girl.svg'} alt={'other'} width={50} height={50} />
                <h2 className='text-[10px] p-1 px-2 rounded-full'> 20 Dec 2024</h2>
            </div>
            <h2 className='font-medium mt-3 text-lg'>{course?.courseLayout?.title}</h2>
            <p className='text-sm text-gray-600 line-clamp-2 mt-2'>{course?.courseLayout?.summary}</p>
            <div className='mt-3'>
                <Progress value={0}/>
            </div>
            <div className='mt-3 flex justify-end'>
                <Button>View</Button>
            </div>
        </div>
    </div>
  )
}

export default CourseCardItem