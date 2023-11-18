import React from "react";
import toast from "react-hot-toast";
import { MdAdd } from "react-icons/md";

type Props = {
  benefits: { title: string }[];
  setBenefits: (benefits: { title: string }[]) => void;
  prerequistions: { title: string }[];
  setPrerequistions: (prerequistions: { title: string }[]) => void;
  active: number;
  setActive: (active: number) => void;
};

const CourseData = ({
  benefits,
  setBenefits,
  prerequistions,
  setPrerequistions,
  active,
  setActive,
}: Props) => {
  const handelBenefitChange = (index: number, value: any) => {
    const updateBenefit = [...benefits];
    updateBenefit[index].title = value;
    setBenefits(updateBenefit);
  };

  const handelPrereQuestionChange = (index: number, value: any) => {
    const updatePrereQuestion = [...prerequistions];
    updatePrereQuestion[index].title = value;
    setPrerequistions(updatePrereQuestion);
  };

  const addBenefit = ()=>{
    setBenefits([...benefits,{title:""}])
  }

  const addPrerequistions = ()=>{
    setPrerequistions([...prerequistions,{title:""}])
  }

  const handelOption = ()=>{
    if(benefits[benefits.length - 1]?.title !== "" && prerequistions[prerequistions.length - 1 ]?.title !== ""){
      setActive(active+1)
    }else{
      toast.error("Please fill the fields for go to next")
    }
  }

  const preButton = ()=>{
    setActive(active-1)
  }

  return (
    <div className="p-8">
      <h2 className=" text-3xl font-[500] pb-5">Course Options</h2>
      <div>
        <label className=" text-black font-semibold text-sm" htmlFor="">
          What are the benefits for student in the course
        </label>
        {benefits?.map((benefit: any, index: number) => (
          <input
            type="text"
            required
            id="name"
            value={benefit.title}
            onChange={(e: any) =>handelBenefitChange(index,e.target.value)}
            className=" w-full py-3 px-3 border my-2  rounded-lg border-gray-400 focus:outline-blue-500"
            placeholder="Enter Course Name"
          />
        ))}
        <button onClick={()=>addBenefit()} className="py-2 px-2 mt-2 bg-green-500 text-white rounded-md"><MdAdd size={20}/></button>
      </div>
      <div className="py-5">
        <label className=" text-black font-semibold text-sm" htmlFor="">
          What are the prerequistions for student in the course
        </label>
        {prerequistions?.map((prerequistion: any, index: number) => (
          <input
            type="text"
            required
            id="name"
            value={prerequistion.title}
            onChange={(e: any) =>handelPrereQuestionChange(index,e.target.value)}
            className=" w-full py-3 px-3 border my-2  rounded-lg border-gray-400 focus:outline-blue-500"
            placeholder="Enter Course Name"
          />
        ))}
        <button onClick={()=>addPrerequistions()} className="py-2 px-2 mt-2 bg-green-500 text-white rounded-md"><MdAdd size={20}/></button>
      </div>
      <div className=" flex items-center justify-between">
            <button onClick={()=>preButton()}  className="w-[200px] py-2 bg-primary rounded-md text-white font-semibold text-xl">Prev</button>
            <button onClick={()=>handelOption()}  className="w-[200px] py-2 bg-primary rounded-md text-white font-semibold text-xl">Next</button>
        </div>
    </div>
  );
};

export default CourseData;
