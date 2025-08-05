import React from 'react'
import Image from 'next/image'

function SelectOption() {
    const options = [
        {
            name:"Exam",
            icon:"Happy"
        },
         {
            name:"Job Interview",
            icon:"exam_1.png"
        },
         {
            name:"Practice",
            icon:"exam_1.png"
        },
         {
            name:"Coding prep",
            icon:"exam_1.png"
        },
         {
            name:"Other",
            icon:"/knowledge.png"
        },
    ]
  return (
    <div>SelectOption</div>
  )
}

export default SelectOption