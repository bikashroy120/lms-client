import React from 'react'

type Props = {
    active: number;
    setActive: (active: number) => void;
    handleAddCourse:any;
    courseData:any;
}

const PreviewCourse = ({active,setActive,handleAddCourse,courseData}: Props) => {

    const handelOption = ()=>{
        console.log(courseData)
        handleAddCourse()
      }
    
      const preButton = ()=>{
        setActive(active-1)
      }
    

  return (
    <div className="p-8">
        <div className='w-full h-[400px] bg-black rounded-lg'>

        </div>

        <div>
            <h2 className=' text-black font-medium text-xl'>{courseData.name}</h2>
            <h3 className=' text-red-500 font-medium text-2xl'>{courseData.price}</h3>
        </div>

        <div className=" flex items-center justify-between">
            <button type="button" onClick={()=>preButton()}  className="w-[200px] py-2 bg-primary rounded-md text-white font-semibold text-xl">Prev</button>
            <button type="submit" onClick={()=>handelOption()}  className="w-[200px] py-2 bg-primary rounded-md text-white font-semibold text-xl">Next</button>
        </div>
    </div>
  )
}

export default PreviewCourse