"use client"
import React, { useState } from 'react'
import SelectOption from './_component/SelectOption'

function Create() {
    const [step,setStep] = useState(0);
  return (
    <div className='flex flex-col items-center p-5 md:px-24 lg:px-36 mt-20'>
        <h2 className='font-bold text-3xl text-primary'> Start Building Your Personal Study Material</h2>
        <p> Fill All details to generate a study material for your courses</p>
        <div className='mt:10'>
        {step==0?  <SelectOption/>
        :null}
        </div>
    </div>
  )
}

export default Create