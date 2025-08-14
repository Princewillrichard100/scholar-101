"use client"
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import CourseCardItem from './CourseCardItem';
import axios from 'axios';

function CourseList(){
    const {user}=useUser();
    const [courseList, setCourseList] = useState([]);

    useEffect(()=>{
        user&&GetCourseList();
    },[user])

    const GetCourseList=async()=>{
        const result=await axios.post('/api/courses',{createdBy:user?.primaryEmailAddress?.emailAddress})
        console.log(result);
        setCourseList(result.data.result);
    }
    return(
        <div className='mt-10'>
            <h1 className='text-2xl font-bold'>Your study Material</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-2'>
            {courseList?.map((course, index) => (
                <CourseCardItem key={index} course={course}/>
            ))}
        </div>
        </div>
    )
}
export default CourseList;