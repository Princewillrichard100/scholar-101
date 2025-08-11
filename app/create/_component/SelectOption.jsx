import React from "react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Item } from "@radix-ui/react-select";

function SelectOption({selectedStudyType}) {
  const options = [
    {
      name: "Exam",
      icon: "/Happy-Girl.svg",
    },
    {
      name: "Job Interview",
      icon: "/publicdomainq-interview.svg",
    },
    {
      name: "Practice",
      icon: "/knowledge.svg",
    },
    {
      name: "Coding prep",
      icon: "/programming-coding.svg",
    },
    {
      name: "Other",
      icon: "/knowledge.svg",
    },
  ];
  const [selectedOption, setSelectedOption] = useState();
  const [step, setStep] = useState(0);
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-semibold mb-8 text-center text-gray-800">
        What would be working on for your tailored course material
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {options.map((option, index) => (
          <div
            key={index}
            className={`justify-center items-center flex flex-col gap-5 p-5 border rounded-xl hover:border-primary transition cursor-pointer ${
              selectedOption === option.name ? "bg-primary" : "border-gray-300"
            }`}
            onClick={() => {setSelectedOption(option.name);selectedStudyType(option.name)}}
          >
            <Image src={option.icon} alt={option.name} width={50} height={50} />
            <h2 className="text-sm mt-2">{option.name}</h2>
            {/* <div className="mt-10">{step ==0?  <SelectOption /> : null}</div>
            <div className="flex justify-between w-full mt-32">
              {step !=0? <Button variant="outline">Previous</Button>:'_'}
              <Button>Next</Button>
            </div>
          </div> */}
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default SelectOption;